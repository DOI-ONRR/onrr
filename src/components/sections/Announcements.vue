<template>
  <v-container>
    <h2 style="margin-bottom: 8px;">{{ title  || 'Announcements'}}</h2>
    <v-card v-for="announcement in announcements" :key="announcement.id"
    color="#f1f1f1"
    class="announcement-card"
    elevation="0">
      <v-card-title>{{ announcement.title }}</v-card-title>
      <v-card-text v-html="announcement.content" />
    </v-card>
  </v-container>
</template>

<script>
import { ANNOUNCEMENTS_QUERY } from '@/graphql/queries'
export default {
  name: 'Announcements',
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

<style scoped>
.announcement-card {
  margin-bottom: 25px;
}
</style>