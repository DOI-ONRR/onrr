<template>
  <div class="side-menu-wrap">
    <v-list>
      <v-subheader>{{ `${ menuHeader } Home` }}</v-subheader>
      <v-list-item-group
        color="primary" v-for="item in menuItems" :key="item.key.id">
        <v-list-item v-for="cItem in item.data" :key="cItem.id">
          <v-list-item-content>
            <router-link :to="`/${ item.key.link_to_page.slug }/${ cItem.link_to_page.slug }`">
              {{ cItem.menu_label }}
            </router-link>  
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { MENU_QUERY } from '@/graphql/queries'

export default {
  name: 'SideMenu',
  data () {
    return {
      menuItems: []
    }
  },
  apollo: {
    menu_items: {
      query: MENU_QUERY,
      loadingKey: 'loading...',
      result({ data }) {
        const mItems = []
        if (data) {
          console.log('Side menu data: ', data)
          const childItems = data.menu_items.filter(item => 
            item.menu === 'main' && item.parent !== null && item.parent.link_to_page.slug === this.menuSlug)
          console.log('childItems: ', childItems)
          data.menu_items.filter(item => item.menu === 'main').map(item => {
            if (item.parent === null) {
              mItems.push({ key: item, data: [...childItems.filter(child => child.parent.id === item.id) ] })
            }
          }) 
        }
        
        this.menuItems = mItems
      }
    }
  },
  props: {
    menuId: {
      type: String,
      required: true
    },
    menuHeader: {
      type: String,
    },
    menuSlug: {
      type: String
    }
  }
}
</script>

<style scoped>
a.router-link-active {
  font-weight: bold;
  color: rgb(6, 33, 53);
}
</style>

