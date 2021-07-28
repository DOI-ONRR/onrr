<template>
  <div
    :class="[`text-${ contentType }`]"
    v-html="content">
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  data () {
    return {}
  },
  props: {
    content: {
      type: String
    },
    contentType: {
      type: String
    }
  }
}
</script>