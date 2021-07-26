<template>
  <div
    :class="[`text-${ contentType }`]"
    v-text="content">
  </div>
</template>

<script>
export default {
  name: 'HeadingBlock',
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