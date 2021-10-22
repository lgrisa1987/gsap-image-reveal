<template>
  <main>
    <div class="container" v-for="(section, index) in 3" :key="index">
      <Container :index="index" />
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { gsap } from "gsap";
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },
  computed: {
    ...mapState(["options"]),
  },
  mounted() {
    this.reveal(gsap);
  },
  methods: {
    ...mapMutations(["reveal"]),
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  &:nth-child(1) {
    background: #bcc4c0;
  }
  &:nth-child(2) {
    background: #decdc6;
  }
  &:nth-child(3) {
    background: #ded2b8;
  }
}
</style>
