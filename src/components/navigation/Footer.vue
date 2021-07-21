<template>
  <v-footer
    padless
    class="footer">
    <v-row
      justify="center"
      class="top">
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <router-link :to="{ name: 'Default', params: { slug: item.slug } }">
              {{ item.menu_label }}
            </router-link>  
          </li>
        </ul>
      </nav>
    </v-row>
    <v-row class="bottom">
      <div class="footer-logo-wrap">
        <router-link to="/">
          <v-img
            alt="ONNR Logo"
            class="shrink mr-2"
            contain
            src="../../assets/images/icons/onrr-logo-200x200.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <router-link to="/">
          <div class="logo-content">
            <span style="font-size: .85rem; line-height: .85rem; top: 5px; position: relative;">U.S. Department of the Interior</span>
            <br><span style="font-size: 1.5rem; top: -4px; position: relative;">Office of Natural Resources Revenue (ONRR)</span>
          </div>
        </router-link>
      </div>
      <nav>
        <ul>
          <li v-for="item in socialMenuItems" :key="item.id">
            <v-btn
              text
              :to="item.slug"
            >
              <span class="mr-2">{{ item.menu_label }}</span>
              <v-icon>{{ `mdi-${ item.menu_label.toLowerCase() }` }}</v-icon>
            </v-btn> 
          </li>
          <li>
            <v-btn
              text
              to="/about-onrr/contact-us"
            >
              <span class="mr-2">Contact Us</span>
              <v-icon>mdi-phone</v-icon>
            </v-btn> 
          </li>
        </ul>
      </nav>
    </v-row>
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
    menuItems: function () {
      return this.menu_items.filter(item => item.menu === 'footer')
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
}
.footer a {
  color: white;
  text-decoration: none;
}

.footer a:active,
.footer a:hover {
  text-decoration: underline;
}

.footer nav ul {
  display: flex;
  list-style: none;
}

.footer nav li {
  justify-content: flex-start;
  margin-right: 16px;
}
.footer .top {
  background-color: #616161;
  padding: 32px;
}

.footer .bottom {
  background-color: #212121;
  padding: 32px;
  display: flex;
  justify-content: space-between;
}

.footer-logo-wrap {
  display: flex;
  justify-content: flex-start;
}

.footer-logo-wrap .logo-content {
  position: relative;
  top: -10px;
}

.v-btn {
  color: white;
}
</style>