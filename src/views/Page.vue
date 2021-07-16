<template>
  <div>
    <div class="text-center" v-if="$apollo.loading">
      <v-progress-circular :value="20"></v-progress-circular>
    </div>
    <div v-else class="page-wrap">
      <div v-html="page.content" />
    </div>
  </div>
</template>

<script>
import { PAGES_QUERY, PAGES_BY_ID_QUERY } from '@/graphql/queries'
export default {
  name: 'Page',
  data() {
    return {
      pages: [],
      pages_by_id: []
    }
  },
  apollo: {
    pages: {
      query: PAGES_QUERY,
      loadingKey: 'loading...',
    },
    pages_by_id: {
      query: PAGES_BY_ID_QUERY,
      loadingKey: 'loading...',
      variables () {
        return {
          ID: this.findPageBySlug.id
        }
      },
      fetchPolicy: 'cache-and-network'
    }
  },
  props: {
    slug: String,
  },
  computed: {
    findPageBySlug() {
      const str = this.$route.path
      const route = str.replace(/\//g, '')
      let page
      if(this.pages) {
        page = this.slug ? this.pages.find(page => page.slug === this.slug) : this.pages.find(page => page.slug === route)
      }

      return page
    },
    page() {
      return this.pages_by_id
    }
  }
}
</script>

<style scoped>
.page-wrap {
  padding-top: 25px;
}
</style>