<template>
  <div class="reveal">
    <img
      :src="require(`../assets/photo${index + 1}.jpg`)"
      :alt="`photo${index + 1}`"
    />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    index: {
      type: Number,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reveal {
  visibility: hidden;
  position: relative;
  width: 60%;
  height: 60%;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  img {
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    width: 100%;
    object-fit: cover;
  }
}
</style>
