<template>
  <div>
    <div class="text-center" v-if="$apollo.loading">
      <v-progress-circular :value="20"></v-progress-circular>
    </div>
    <div v-else class="page-wrap">
      <Breadcrumbs />
      <div v-html="page.content" class="body-1" />
      <div v-for="block in page.page_blocks" :key="block.id">
        <div v-if="block.item.__typename === 'section_heading_blocks'">
          <ContentBlock :content="block.item.section_heading" :contentType="block.item.section_heading_type" />
        </div>
        <div v-if="block.item.__typename === 'text_blocks'">
          <ContentBlock :content="block.item.content" contentType="body-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PAGES_QUERY, PAGES_BY_ID_QUERY } from '@/graphql/queries'
import Breadcrumbs from '@/components/sections/Breadcrumbs'
import ContentBlock from '@/components/blocks/ContentBlock'

export default {
  name: 'Page',
  components: {
    Breadcrumbs,
    ContentBlock
  },
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
    findPageBySlug () {
      const str = this.$route.path
      const route = str.replace(/\//g, '')
      let page
      if(this.pages) {
        page = this.slug ? this.pages.find(page => page.slug === this.slug) : this.pages.find(page => page.slug === route)
      }

      return page
    },
    page () {
      return this.pages_by_id
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrap {
  padding-top: 25px;
}
</style>