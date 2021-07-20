<template>
  <div>
    <div v-if="$apolloData.loading">
      <div class="text-center">
        <v-progress-circular :value="20" />
      </div>
    </div>
    <div v-else>
      <HeroImage
        v-if="page" 
        :title="page.title" 
        :image="`${ site_url }/assets/${ pages_by_id.hero_image.id }?fit=cover&quality=80`"
        :isHome="false" />
      <v-container>
        <v-row>
          <v-col
            sm="12"
            md="3">
            <SideMenu v-if="page" :menuId="page.id" :menuHeader="page.title" :menuSlug="parentSlug" />
          </v-col>
          <v-col
            sm="12"
            md="9">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { DIRECTUS_API_URL } from '@/constants'
import { PAGES_QUERY, PAGES_BY_ID_QUERY } from '@/graphql/queries'
import SideMenu from '@/components/navigation/SideMenu'
import HeroImage from '@/components/sections/HeroImage'

export default {
  name: "TwoColumnLeft",
  data() {
    return {
      page: null,
      pages: [],
      parentSlug: null,
      site_url: DIRECTUS_API_URL,
      pageId: null,
    }
  },
  apollo: {
    pages: {
      query: PAGES_QUERY,
      loadingKey: 'loading...',
      result ({ data }) {
        if (data) {
          const str = this.$route.path
          const routes = str.split('/')
          const page = this.slug 
            ? data.pages.find(page => page.slug === this.slug)
            : this.pages.find(page => page.slug === routes[routes.length - 1])
          this.page = page
          this.pageId = page.id
        }
      }
    },
    pages_by_id: {
      query: PAGES_BY_ID_QUERY,
      loadingKey: 'loading...',
      variables () {
        return {
          ID: this.pageId
        }
      },
    }
  },
  components: {
    HeroImage,
    SideMenu,
  },
  props: {
    slug: {
      type: String,
    }
  },
  created () {
    this.getParentSlug()
    this.findPageBySlug()
  },
  methods: {
    getParentSlug () {
      const fullPath = this.$route.fullPath
      // get first segement of full url path
      fullPath.indexOf(1)
      fullPath.toLowerCase()
      const path = fullPath.split('/')[1]
      this.parentSlug = path
    },
    findPageBySlug: function () {
      const str = this.$route.path
      const routes = str.split('/')

      let page
      if(this.pages) {
        page = (this.slug !== undefined) 
          ? this.pages.find(page => page.slug === this.slug)
          : this.pages.find(page => page.slug === routes[routes.length - 1])
      }
      this.page = page
      return page
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
