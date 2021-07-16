<template>
  <v-app>
    <AppToolbar />
    <v-main>
      <router-view :key="$route.path" />
      <!-- <router-view name="TwoColumnLeft" /> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppToolbar from '@/components/toolbars/AppToolbar'
import Footer from '@/components/navigation/Footer'

export default {
  name: 'App',

  components: {
    AppToolbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>


<style>
#app {
  font-family: Lato, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 16px;
}

.v-toolbar__extension {
  margin-left: 0;
  margin-right: 0;
  padding: 0 !important;
  top: 5px;
}
</style>