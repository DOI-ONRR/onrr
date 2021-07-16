<template>
  <v-container>
    <h2 style="margin-bottom: 8px;">{{ title  || 'Announcements'}}</h2>
    <v-card v-for="announcement in announcements" :key="announcement.id"
    color="grey lighten-3"
    class="announcement-card"
    elevation="0">
      <v-card-title>{{ announcement.title }}</v-card-title>
      <v-card-text v-html="announcement.content" class="body-1" />
    </v-card>
  </v-container>
</template>

<script>
import { ANNOUNCEMENTS_QUERY } from '@/graphql/queries'
export default {
  name: 'Announcements',
  data() {
    return {

    }
  },
  apollo: {
    announcements: {
      query: ANNOUNCEMENTS_QUERY,
      loadingKey: 'loading...'
    }
  },
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.announcement-card {
  margin-bottom: 25px;
}
</style>