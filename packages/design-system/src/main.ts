import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { defineCustomElements, applyPolyfills } from '@porsche-ui/ui-kit-js/loader';
import Playground from '@/components/Playground.vue';
import ColorBadge from '@/components/ColorBadge.vue';
import '@porsche-ui/ui-kit-js/dist/porsche-ui-kit/porsche-ui-kit.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/p-\w*/];

(async () => {
  await applyPolyfills();
  await defineCustomElements(window);
})();

Vue.use({
  install(vue: any) {
    vue.component('Playground', Playground);
    vue.component('ColorBadge', ColorBadge);
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
