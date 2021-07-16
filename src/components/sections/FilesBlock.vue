<template>
  <v-container>
    <h2 style="margin-bottom: 8px;">{{ title  || 'Files'}}</h2>
    <v-card v-for="file in fileItems" :key="file.id"
    class="announcement-card"
    elevation="0">
      <a :href="`${ API }/assets/${ file.filename_disk }`">
        {{ file.title }}
      </a>
    </v-card>
  </v-container>
</template>

<script>
import { FILES_QUERY } from '@/graphql/queries'
import { DIRECTUS_API_URL } from '@/constants'
export default {
  name: 'FilesBlock',
  data() {
    return {
      API: DIRECTUS_API_URL,
      files: []
    }
  },
  apollo: {
    files: {
      query: FILES_QUERY,
      loadingKey: 'loading...',
      client: 'a'
    }
  },
  props: {
    filterBy: String,
    title: String
  },
  computed: {
    fileItems: function() {
      return this.files.filter(file => file.folder && file.folder.name === this.filterBy)
    }
  }
}
</script>