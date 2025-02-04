<template>
  <p-button
    type="button"
    :theme="theme"
    :icon-source="stackBlitzIcon"
    :disabled="framework === 'shared'"
    :loading="isLoading"
    @click="onButtonClick()"
    >{{ buttonLabel }}
  </p-button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import type { ColorScheme, Framework, Theme } from '@/models';
  import { openInStackBlitz } from '@/utils';
  import type { ExternalDependency, SharedImportKey } from '@/utils';
  import { isStableStorefrontRelease } from '@/utils/stackblitz/helper';
  import type { PorscheDesignSystemBundle, PorscheDesignSystemBundleMap } from '@/utils/stackblitz/types';

  const porscheDesignSystemBundleMap: PorscheDesignSystemBundleMap = {};

  @Component
  export default class CodeEditor extends Vue {
    @Prop({ default: '' }) public markup!: string;
    @Prop({ default: 'light' }) public theme!: Theme;
    @Prop({ default: 'vanilla-js' }) public framework!: Exclude<Framework, 'shared'>;
    @Prop({ default: 'default' }) public colorScheme!: ColorScheme;
    @Prop({ default: () => [] }) public externalStackBlitzDependencies!: ExternalDependency[];
    @Prop({ default: () => [] }) public sharedImportKeys!: SharedImportKey[];
    @Prop({ default: 'Edit in StackBlitz' }) public buttonLabel!: string;
    @Prop({ default: '' }) public pdsVersion!: string;

    isLoading = false;
    stackBlitzIcon = require('../assets/icon-stackblitz.svg');

    public async onButtonClick() {
      this.isLoading = true;
      openInStackBlitz({
        porscheDesignSystemBundle: await CodeEditor.porscheDesignSystemBundle(this.framework, this.pdsVersion),
        markup: this.markup,
        framework: this.framework,
        theme: this.theme,
        externalDependencies: this.externalStackBlitzDependencies,
        backgroundColorScheme: this.colorScheme,
        sharedImportKeys: this.sharedImportKeys,
        pdsVersion: this.pdsVersion,
      });
      this.isLoading = false;
    }

    private static async porscheDesignSystemBundle(
      framework: Exclude<Framework, 'shared'>,
      pdsVersion?: string
    ): Promise<PorscheDesignSystemBundle> {
      switch (framework) {
        case 'vanilla-js':
          return await CodeEditor.fetchPorscheDesignSystemBundle('js', pdsVersion);
        case 'angular':
          return {
            ...(await CodeEditor.fetchPorscheDesignSystemBundle('js', pdsVersion)),
            ...(await CodeEditor.fetchPorscheDesignSystemBundle('angular', pdsVersion)),
          };
        case 'react':
          return {
            ...(await CodeEditor.fetchPorscheDesignSystemBundle('js', pdsVersion)),
            ...(await CodeEditor.fetchPorscheDesignSystemBundle('react', pdsVersion)),
          };
      }
    }

    public static async fetchPorscheDesignSystemBundle(
      framework: keyof PorscheDesignSystemBundleMap,
      pdsVersion?: string
    ): Promise<PorscheDesignSystemBundle> {
      if (!pdsVersion && !isStableStorefrontRelease() && !porscheDesignSystemBundleMap[framework]) {
        // { cache: 'no-store' }: download a resource with cache busting, to bypass the cache completely.
        const response = await fetch(`porsche-design-system/components-${framework}.json`, { cache: 'no-store' });
        porscheDesignSystemBundleMap[framework] = (await response.json()) as PorscheDesignSystemBundle;
      }

      return porscheDesignSystemBundleMap[framework] || {};
    }
  }
</script>
