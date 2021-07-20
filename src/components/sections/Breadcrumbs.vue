<template>
  <v-breadcrumbs
    divider="|"
    :items="breadcrumbs">
    <template v-slot:breadcrumb="{ breadcrumb }">
      <v-breadcrumbs-item>
        {{ breadcrumb }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { titleCase } from '@/js/utils'
export default {
  name: 'Breadcrumbs',
  data () {
    return {
    }
  },
  methods: {
    prettyBreadcrumb (str) {
      const result = str
        .replace(/-/g, ' ')
        .replace(/^./, function(x) { return x.toUpperCase() })

      return titleCase(result)
    }
  },
  computed: {
    breadcrumbs () {
      let pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = []
      // needed to handle the intermediary entries for nested vue routes
      let breadcrumb = ''
      let lastIndexFound = 0
      for (let i = 0; i < pathArray.length; ++i) {
        breadcrumb = `${breadcrumb}${'/'}${pathArray[i]}`
        if (this.$route.matched[i] &&
          Object.hasOwnProperty.call(this.$route.matched[i], 'meta') &&
          Object.hasOwnProperty.call(this.$route.matched[i].meta, 'breadcrumb')) {
          breadcrumbs.push({
            href: i !== 0 && pathArray[i - (i - lastIndexFound)]
              ? '/' + pathArray[i - (i - lastIndexFound)] + breadcrumb
              : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text: this.$route.matched[i].meta.breadcrumb || this.prettyBreadcrumb(pathArray[i])
          })
          lastIndexFound = i
          breadcrumb = ''
        }
      }
      return breadcrumbs
    }
  }
}
</script>