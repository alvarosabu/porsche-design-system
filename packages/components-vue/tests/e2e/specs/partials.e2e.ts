import * as jsPartials from '@porsche-design-system/components-js/partials';
import * as vuePartials from '@porsche-design-system/components-vue/partials';

it('should reexport all partials from components-js', () => {
  expect(vuePartials).toEqual(jsPartials);
});
