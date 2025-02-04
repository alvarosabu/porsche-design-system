<template>
  <nav>
    <Search :hideNavigation="this.hideNavigation" v-on:onSearchActiveChange="shouldHideNavigation" />
    <template v-if="!this.hideNavigation">
      <p-accordion
        v-for="(pages, category, index) in config"
        :key="index"
        :heading="category"
        v-bind:open="accordion[category]"
        v-on:accordionChange="toggleActive(category)"
        compact="true"
      >
        <ul>
          <li v-for="(tabs, page, index) in pages" :key="index">
            <p-link-pure class="link" icon="none" :active="isActive(category, page)">
              <router-link :to="getRoute(category, page)">{{ page }}</router-link>
            </p-link-pure>
          </li>
        </ul>
      </p-accordion>
    </template>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Watch } from 'vue-property-decorator';
  import { StorefrontConfig } from '@/models';
  import { capitalCase, paramCase } from 'change-case';
  import { Route } from 'vue-router';
  import { config as storefrontConfig } from '@/../storefront.config';

  import Search from '@/components/Search.vue';

  @Component({
    components: {
      Search,
    },
  })
  export default class Sidebar extends Vue {
    public config: StorefrontConfig = storefrontConfig;
    public accordion: { [id: string]: boolean } = {};
    public hideNavigation = false;

    public getRoute(category: string, page: string): string {
      return `/${paramCase(category)}/${paramCase(page)}`;
    }

    public isActive(category: string, page: string): boolean {
      const routeParams = this.$router.currentRoute.params;
      return routeParams.category === paramCase(category) && routeParams.page === paramCase(page);
    }

    private created(): void {
      this.accordion = Object.keys(this.config).reduce((result, category) => {
        result[category] = false;
        return result;
      }, {} as { [id: string]: boolean });

      // sort components alphabetically
      this.config.Components = Object.keys(this.config.Components)
        .sort()
        .reduce((result, category) => {
          result[category] = this.config.Components[category];
          return result;
        }, {} as StorefrontConfig['Components']);
    }

    @Watch('$route')
    private onRouteChange(to: Route): void {
      this.accordion = { ...this.accordion, [Sidebar.category(to)]: true };
    }

    toggleActive(category: string): void {
      this.accordion = { ...this.accordion, [category]: !this.accordion[category] };
    }

    shouldHideNavigation(hideNavigation: boolean): void {
      this.hideNavigation = hideNavigation;
    }

    private static category(route: Route): string {
      const { category } = route.params;
      return category ? capitalCase(category) : '';
    }
  }
</script>

<style scoped lang="scss">
  @import '~@porsche-design-system/components-js/utilities/scss';

  ul,
  li {
    list-style: none;
  }

  .link {
    width: 100%;
    margin: $pds-spacing-x-small 0;
    display: inline-block;
    text-decoration: none;
  }
</style>
