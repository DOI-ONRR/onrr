<template>
  <div>
    <v-system-bar
      app
      color="#222"
      height="30"
      class="system-bar"
      :class="{ 'hidden-system-bar': !showSystemBar }">
      <div class="banner-wrap">
        <v-img
        alt="U.S. Flag"
        class="shrink mr-2"
        contain
        src="../../assets/images/icons/us-flag-small.png"
        transition="scale-transition"
        width="20"
      />
        An official website of the U.S. government
      </div>
    </v-system-bar>
    <v-app-bar
      app
      color="primary"
      dark
      class="v-app-bar-wrap"
      :class="{ 'hidden-system-bar': !showSystemBar }"
    >
        <div class="d-flex align-center logo">
          <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../../assets/images/icons/onrr-logo-200x200.png"
              transition="scale-transition"
              width="40"
            />
            </router-link>
            <router-link to="/">
            <v-toolbar-title>
              <span style="font-size: .85rem; line-height: .85rem; top: 5px; position: relative;">U.S. Department of the Interior</span>
              <br><span style="font-size: 1.5rem; top: -4px; position: relative;">Office of Natural Resources Revenue (ONRR)</span>
            </v-toolbar-title>
            </router-link>
          
        </div>

        <v-spacer></v-spacer>

        <v-btn
          text
          to="/about-onrr/contact-us"
          class="no-btn-hover"
        >
          <span class="v-btn__content">
            <v-icon>mdi-phone</v-icon>
            <span class="mr-2">Contact Us</span>
          </span>
          
        </v-btn>
        <v-btn
          text
          to="/references/reporter-training"
          class="no-btn-hover"
        >
          <span class="v-btn__content">
            <v-icon>mdi-calendar</v-icon>
            <span class="mr-2">Events</span>
          </span>
        </v-btn>
        <v-btn
          href="https://revenuedata.doi.gov"
          target="_blank"
          text
          class="no-btn-hover"
        >
          <span class="v-btn__content">
            <v-icon>mdi-chart-bar</v-icon>
            <span class="mr-2">Revenue Data</span>
          </span>
        </v-btn>

        <v-btn
          text
          @click="toggleTheme()"
          class="no-btn-hover"
          v-if="hostname === 'localhost'"
        >
          <span class="v-btn__content">
            <v-icon>mdi-toggle-switch-off</v-icon>
            <span class="mr-2">Change Theme</span>
          </span>
        </v-btn> 

        <template v-slot:extension>
          <MainMenu />
        </template>
    </v-app-bar>
  </div>
</template>

<script>
import MainMenu from '../navigation/MainMenu'

const OFFSET = 30

export default {
  name: 'AppToolbar',
  data () {
    return {
      hostname: location.hostname,
      showSystemBar: true, 
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  components: {
    MainMenu
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showSystemBar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style lang="scss" scoped>
.logo a {
  text-decoration: none;
  color: white;
}
.logo .v-toolbar__title {
  position: relative;
  top: -2px;
  margin-left: 5px;
}
.banner-wrap {
  text-align: center;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 30px;
}

.v-btn__content {
  flex-direction: column;
}

.no-btn-hover::before {
  background-color: transparent !important;
}

.system-bar {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.system-bar.hidden-system-bar {
  height: 0;
  transition: height .1 ease;
}

.v-app-bar-wrap {
  transition: 0.1s all ease-out;
}

.v-app-bar-wrap.hidden-system-bar {
  margin-top: 0 !important;
  height: 50px;
  transition: height .1s ease;
}

</style>