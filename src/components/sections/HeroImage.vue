<template>
  <div class="hero-container">
    <img 
    :src="image"
    alt="Sunrise reflection" />
    <h1 class="hero__text" v-if="title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  props: {
    title: {
      type: String
    },
    image: {
      type: String
    }
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  top: 5px;
  height: 300px;
}
.hero-container img {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  object-fit: cover;
  object-position: left 15%;
}
.hero__text {
  position: absolute;
  height: 100px;
  line-height: 100px;
  font-weight: 400;
  width: 80%;
  bottom: 0;
  right: 0;
  background: rgba(150, 66,169, 0.65);
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 50px;
}
</style>