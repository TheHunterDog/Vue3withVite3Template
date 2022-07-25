<template>
<h1>About us</h1>
</template>

<script>
import { useHead } from '@vueuse/head'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    useHead({
      // Can be static or computed
      title: "About caculat",
      meta: [
        {
          name: `description`,
          content: "A detailed description about caculat",
        },
      ],
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2660A4;
}
</style>
