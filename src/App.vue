<template>
  <StandUkraine></StandUkraine>
  <AppWrapper></AppWrapper>
<FooterApp></FooterApp>
</template>

<script>
import AppWrapper from "./components/AppWrapper.vue";
import StandUkraine from "./components/StandUkraine.vue";
import FooterApp from "./components/FooterApp.vue";
import { useHead } from "@vueuse/head";
export default {
  name: "App",
  components: {
    AppWrapper,
    StandUkraine,
    FooterApp
  },
  setup() {
    useHead({
      title: "caculat",
      meta: [
        {
          name: `description`,
          content: "Convert or calculate most things with caculat",
        },
      ],
    });
  },
};
</script>

<style>
.footer {
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 15px;
}
a {
  color: #2660A4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
