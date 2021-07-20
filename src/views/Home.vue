<template>
  <div class="home__wrap">
    <div class="text-center" v-if="$apollo.loading">
      <v-progress-circular :value="20"></v-progress-circular>
    </div>
    <div v-else>
      <HeroImage 
        v-if="pages_by_id" 
        :title="heroContent" 
        :image="`${ site_url }/assets/${ pages_by_id.hero_image.id }?fit=cover&quality=80`"
        :isHome="true" />
      <v-container class="home__content">
        <v-row>
          <v-col
            sm="12"
            md="8">
            <div v-html="pages_by_id.content" />
            <!-- First row of block content -->
            <v-row class="first-row">
              <v-col sm="12" md="6" v-for="block in firstRowBlocks" :key="block.id">
                <v-card 
                  outlined
                  elevation="0" 
                  class="card">
                  <h2>{{ block.title }}</h2>
                  <div v-html="block.content" />
                </v-card>
              </v-col>
            </v-row>

            <!-- Second row block content -->
            <v-row class="second-row">
              <v-col sm="12" md="4" v-for="block in secondRowBlocks" :key="block.id">
                <v-card outlined elevation="0" class="card">
                  <h2>{{ block.title }}</h2>
                  <div v-html="block.content" />
                </v-card>
              </v-col>
            </v-row>

            <!-- Third row block content -->
            <v-row class="third-row">
              <v-col sm="12" md="4" v-for="block in thirdRowBlocks" :key="block.id">
                <v-card outlined elevation="0" class="card">
                  <h2>{{ block.title }}</h2>
                  <div v-html="block.content" />
                </v-card>
              </v-col>
            </v-row>

            <!-- Fourth row of block content -->
            <v-row class="fourth-row">
              <v-col sm="12" md="6">
                <v-card outlined elevation="0" class="card">
                  <FilesBlock title="Reporter Letters" filterBy="Reporter Letters" />
                </v-card>
              </v-col>
              <v-col sm="12" md="6">
                <v-card outlined elevation="0" class="card">
                  <FilesBlock title="Press Releases" filterBy="Press Releases" />
                </v-card>
              </v-col>
            </v-row>

            <!-- Fifth row of block content -->
            <v-row class="fifth-row">
              <v-col sm="12" md="12">
                <v-card outlined elevation="0" class="card">
                  <RevenueStats title="Revenue Statistics" />
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="12" md="4">
            <Announcements title="Announcements" />
          </v-col>
        </v-row>
        
      </v-container>
    </div>
  </div>
</template>

<script>
import { HOME_PAGE_QUERY } from '@/graphql/queries'
import { DIRECTUS_API_URL } from '@/constants'
import Announcements from '@/components/sections/Announcements'
import FilesBlock from '@/components/sections/FilesBlock'
import RevenueStats from '@/components/sections/RevenueStats'
import HeroImage from '@/components/sections/HeroImage'

export default {
  name: 'Home',
  data() {
    return {
      site_url: DIRECTUS_API_URL,
      heroContent: `The Office of Natural Resources Revenue (ONRR - pronounced like "honor") collects, accounts for, and verifies energy and mineral revenues. We then distribute the funds to States, American Indians, and the U.S. Treasury.`
    }
  },
  apollo: {
    pages_by_id: {
      query: HOME_PAGE_QUERY,
      loadingKey: 'loading...'
    },
    content_blocks: {
      query: HOME_PAGE_QUERY,
      loadingKey: 'loading...'
    }
  }, 
  components: {
    Announcements,
    FilesBlock,
    RevenueStats,
    HeroImage
  },
  computed: {
    firstRowBlocks() {
      return this.content_blocks.filter(block => (block.id === '2' || block.id === '1')).sort((a, b) => a.id - b.id)
    },
    secondRowBlocks() {
      return this.content_blocks.filter(block => (block.id === '3' || block.id === '4' ||  block.id === '5')).sort((a, b) => a.id - b.id)
    },
    thirdRowBlocks() {
      return this.content_blocks.filter(block => (block.id === '6' || block.id === '7' ||  block.id === '8')).sort((a, b) => a.id - b.id)
    },
    contentBlocks() {
      const blocks = this.content_blocks
      return blocks.sort((a, b) => a.id - b.id)
    },
    cssProps () {
      return {
        '--anchor-color': this.$vuetify.theme.themes.dark.anchor
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .home-content img {
    max-width: 100%;
    margin: 20px 0;
  }

  .card {
    padding: 10px;
  }

  .home__content {
    padding-top: 25px;
  }

  img {
    max-width: 100%;
    margin: 20px 0;
  }

  .first-row .card {
    min-height: 350px;
    border-top-color: #0076a3;
    border-top-width: 6px;
  }

  .second-row .card {
    min-height: 450px;
  }

  .third-row .card {
    min-height: 275px;
  }

  .second-row .card,
  .third-row .card {
    border-top-color: #1a227e;
    border-top-width: 6px;
  }

  .fourth-row .card {
    min-height: 375px;
    border-top-color: #534aae;
    border-top-width: 6px;
  }

  .fifth-row .card {
    border-top-color: #097d4d;
    border-top-width: 6px;
  }
</style>