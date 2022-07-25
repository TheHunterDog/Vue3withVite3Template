<template>
<h1>Sitemap</h1>
<ul>
  <li v-for="value in routes" v-bind:key="value">
    <RouterLink :to="{name:value.name}">
      <p>
    {{value.label}}  
      </p>
    </RouterLink>
  </li>
</ul>
</template>

<script>
import { useHead } from '@vueuse/head'
import {routes} from '../routes'
export default {
  
  name: 'CalculatePage',
    setup() {
    useHead({
      // Can be static or computed
      title: "Sitemap",
      meta: [
        {
          name: `description`,
          content: "Sitemap of caculat.com",
        },
      ],
    })
    return {
      routes
      }
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
</style>
