import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import { capitalCase, pascalCase } from 'change-case';

const removeGenerator = (str: string): string =>
  str.replace(/\s+----------------------------------------------\s+\*Built with.*/g, '');

const transformDoubleToSingleQuotes = (str: string): string => str.replace(/"/g, "'");

const replaceHeadline = (str: string): string => {
  const [, tagName] = str.match(/(# .*)/) ?? [];
  const cleanedTagName = tagName.includes('content-wrapper')
    ? tagName.replace(/^#\sp-/, '')
    : tagName.replace(/^#\sp-|-wrapper/g, '');
  const componentHeadline = capitalCase(cleanedTagName);
  const headline =
    cleanedTagName === 'headline'
      ? `# Typography\n\n## ${componentHeadline}`
      : cleanedTagName === 'text'
      ? `## ${componentHeadline}`
      : `# ${componentHeadline}`;

  return str.replace(tagName, headline);
};

const fixBreakpointCustomizable = (str: string): string => {
  const breakpointCustomizableTypes: string[] = [];

  // Matches all rows and columns of the props table to capture the attribute name and type of the property
  let content = str.replace(/(?:\|\s`(.*?)`\s*?){2}\|.*?\|\s`(.*?)`/g, (match, attribute, attributeType) => {
    // Check if the type of the row contains breakpointCustomizable
    let [, breakpointCustomizable] = attributeType.match(/string\s\\\|\s{.*?base:\s(.*?);\s}/) ?? [];

    if (breakpointCustomizable) {
      // Sort if Numbers
      if (breakpointCustomizable.match(/\s\d+\s/)?.length) {
        breakpointCustomizable = breakpointCustomizable
          .split(' \\| ')
          .map((x: string) => (isNaN(+x) ? x : +x))
          .sort((a: any, b: any) => a - b)
          .join(' \\| ');
      }
      const transformedAttribute = pascalCase(attribute);
      const cleanBreakpointCustomizable = breakpointCustomizable.replace(/\\\|/g, '|');
      breakpointCustomizableTypes.push(`<code>type ${transformedAttribute} = ${cleanBreakpointCustomizable}</code>`);

      match = match.replace(
        attributeType,
        `${breakpointCustomizable} \\| BreakpointCustomizable<${transformedAttribute}>`
      );
    }
    return match;
  });

  const pTag = '<p style="max-width: 100%">';
  const baseType = `<code>type BreakpointCustomizable&ltT&gt = { base: T; xs?: T; s?: T; m?: T; l?: T; xl?: T; }</code>`;

  if (breakpointCustomizableTypes.length) {
    content = content.replace(
      /## Properties/,
      `$&\n\n${pTag}\n${breakpointCustomizableTypes.join('<br>')}<br>${baseType}</p>`
    );
  }

  return content;
};

const replacePipesWithNewLines = (str: string): string => str.replace(/\s(\\\|)\s/g, '` <br>` ');

const cleanReadme = (fileContent: string): string => {
  return [
    replaceHeadline,
    removeGenerator,
    transformDoubleToSingleQuotes,
    fixBreakpointCustomizable,
    replacePipesWithNewLines,
  ].reduce((previousResult, fn) => fn(previousResult), fileContent);
};

const cleanReadmes = () => {
  const files = globby.sync('./src/components/**/readme.md');
  for (const file of files) {
    const sourceFile = path.normalize(file);
    const sourceDirectory = path.dirname(sourceFile);
    const componentName = path.basename(sourceDirectory);
    const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');

    const content = cleanReadme(sourceFileContent);

    fs.writeFileSync(path.normalize(file), content);
    fs.renameSync(path.normalize(file), path.normalize(`${sourceDirectory}/${componentName}.props.md`));
  }
};

cleanReadmes();
