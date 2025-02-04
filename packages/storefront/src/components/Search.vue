<template>
  <ais-instant-search :index-name="getAlgoliaIndexName()" :search-client="searchClient">
    <ais-search-box :class-names="{ 'ais-SearchBox': 'search' }">
      <debounced-search-box :on-focus="shouldDisplayHits" v-on:query-change="shouldDisplayHits" />
    </ais-search-box>

    <ais-state-results>
      <template v-slot="{ results: { hits } }">
        {{ onHitsChange(hits) }}
        <ais-hits
          v-show="displayHits"
          :transform-items="transformItems"
          :class-names="{
            'ais-Hits': 'hits',
            'ais-Hits-item': 'hits__item',
          }"
        >
          <template v-slot:item="{ item }">
            <p-headline variant="headline-5" tag="h2" class="category">{{ item.category }}</p-headline>
            <ul>
              <li v-for="(hit, index) in item.hits" :key="index">
                <p-link-pure class="link" icon="none" @click="() => (displayHits = false)">
                  <router-link :to="hit.url">{{ hit.page }} {{ hit.tab ? ' - ' + hit.tab : '' }}</router-link>
                </p-link-pure>
              </li>
            </ul>
          </template>
        </ais-hits>
      </template>
    </ais-state-results>
  </ais-instant-search>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import algoliasearch from 'algoliasearch/lite';
  import { createInMemoryCache } from '@algolia/cache-in-memory';
  import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY } from '@/../storefront.config';
  import DebouncedSearchBox from '@/components/DebouncedSearchBox.vue';
  import { Prop } from 'vue-property-decorator';
  import type { AlgoliaRecord, AlgoliaRequest, AlgoliaResult } from '@/models';
  import { SearchClient } from 'algoliasearch/lite';

  @Component({
    components: {
      DebouncedSearchBox,
    },
  })
  export default class Search extends Vue {
    @Prop({ default: false }) public hideNavigation!: boolean;

    public algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY, {
      responsesCache: createInMemoryCache(),
      requestsCache: createInMemoryCache({ serializable: false }),
    });

    public displayHits = false;

    public searchClient = {
      ...this.algoliaClient,
      search: (requests: AlgoliaRequest[]): ReturnType<SearchClient['search']> => {
        // remove initial search
        // https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/vue/#detecting-empty-search-requests
        if (requests.every(({ params }: AlgoliaRequest) => !params?.query.trim())) {
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
            })),
          }) as unknown as ReturnType<SearchClient['search']>;
        } else {
          return this.algoliaClient.search(requests);
        }
      },
    };

    onHitsChange(hits: AlgoliaResult[]): void {
      this.$emit('onSearchActiveChange', this.displayHits && hits.length > 0);
    }

    shouldDisplayHits(query: string): void {
      this.displayHits = !!query;
    }

    getAlgoliaIndexName(): string {
      const baseHref = document.querySelector('base')!.getAttribute('href')!;
      // on localhost baseHref is '/'
      return baseHref.length > 1 ? baseHref.slice(1, -1).replace('/', '_') : 'localhost';
    }

    transformItems(items: AlgoliaRecord[]): AlgoliaResult[] {
      return items.reduce((results, current) => {
        const categoryIndex = results.findIndex((result) => result.category === current.category);
        if (categoryIndex >= 0) {
          // reduce amount of displayed hits per category to 5 when using distinct on 'page' instead of 'category''
          results[categoryIndex].hits.length < 5 && results[categoryIndex].hits.push(current);
        } else {
          results.push({ category: current.category, hits: [current] });
        }
        return results;
      }, [] as AlgoliaResult[]);
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

  .hits {
    position: absolute;
    width: 17.5rem;
    background: $pds-theme-light-background-base;
    z-index: 1;
    left: 0;
  }

  .search {
    margin-bottom: 1.5rem;
  }

  .category {
    padding-bottom: $pds-spacing-small;
  }

  :deep(.hits__item) {
    padding: $pds-spacing-small $pds-spacing-large $pds-spacing-small;
  }
</style>
