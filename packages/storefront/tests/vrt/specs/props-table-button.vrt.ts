import { getVisualRegressionPropTableTester, vrtTest } from '@porsche-design-system/shared/testing';
import { routerViewSelector } from '../helpers';

it('should have no visual regression', async () => {
  expect(
    await vrtTest(getVisualRegressionPropTableTester(), 'props-table-button', '/components/button/props', {
      elementSelector: routerViewSelector,
    })
  ).toBeFalsy();
});
