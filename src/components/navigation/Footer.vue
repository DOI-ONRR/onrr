<template>
  <v-footer
    padless
    class="footer">
    <v-toolbar 
      tag="div"
      dense
      elevation="0"
      class="top">
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItemsTop"
          :key="item.id"
          :href="item.custom_url ? item.custom_url : item.link_to_page"
          plain
          color="white">
          {{ item.menu_label }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar
      dense
      elevation="0"
      tag="div"
      class="bottom">
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItemsBottom"
          :key="item.id"
          :href="item.custom_url ? item.custom_url : item.link_to_page"
          plain
          color="white">
          {{ item.menu_label }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar
      tag="div"
      height="120px"
      elevation="0"
      class="abs-bottom">
      <v-toolbar-title>
        <div class="footer-logo-wrap">
          <router-link to="/">
            <v-img
              alt="ONNR Logo"
              class="shrink mr-2"
              contain
              src="../../assets/images/icons/onrr-logo-200x200.png"
              transition="scale-transition"
              width="70"
            />
          </router-link>
          <router-link to="/">
            <div class="logo-content">
              <span>U.S. Department of the Interior</span>
              <span>Office of Natural</span>
              <span>Resources Revenue (ONRR)</span>
            </div>
          </router-link>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in socialMenuItems"
          :key="item.id"
          :to="item.slug"
          icon
          color="secondary">
          <!-- <span class="mr-2">{{ item.menu_label }}</span> -->
          <v-icon>{{ `mdi-${ item.menu_label.toLowerCase() }` }}</v-icon>
        </v-btn>
        <v-btn
          text  
          flat
          to="/about-onrr/contact-us"
        >
          <v-icon>mdi-phone</v-icon>
          <span class="mr-2">Contact Us</span>
        </v-btn> 
      </v-toolbar-items>
    </v-toolbar>
  </v-footer>
</template>

<script>
import { MENU_QUERY } from '@/graphql/queries'
export default {
  name: 'Footer',
  data() {
    return {
      menu_items: []
    }
  },
  apollo: {
    menu_items: {
      query: MENU_QUERY,
      loadingKey: 'loading...'
    }
  },
  computed: {
    menuItemsTop: function () {
      const fItems = this.menu_items.filter(item => item.menu === 'footer')
      return fItems.filter((item, index) => index < 5)
    },
    menuItemsBottom: function () {
      const fItems = this.menu_items.filter(item => item.menu === 'footer')
      return fItems.filter((item, index) => index > 4)
    },
    socialMenuItems: function () {
      return this.menu_items.filter(item => item.menu === 'social')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  overflow: hidden;

  a {
    text-decoration: none;
  }
}

.footer .top {
  background-color: var(--v-neutrals-lighten1);
  padding: 0;
}

.footer .bottom {
  background-color: var(--v-neutrals-lighten1);
  padding: 0;
}

.footer .abs-bottom {
  background-color: var(--v-neutrals-base);
  padding: 0;
  width: 100%;

  a {
    color: white;
  }
}

.footer-logo-wrap {
  display: flex;
  justify-content: flex-start;
}

.footer-logo-wrap .logo-content {
  position: relative;
  top: -10px;

  span {
    display: block;
  }

  span:first-child {
    font-size: .80rem;
    top: 8px;
    position: relative;
  }

  span:nth-child(2) {
    font-size: 1.5rem; 
    top: 4px;
    position: relative;
  }

  span:last-child {
    font-size: 1.5rem; 
    top: -6px;
    position: relative;
  }
}

</style>