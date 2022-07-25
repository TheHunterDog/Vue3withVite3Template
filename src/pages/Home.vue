<template>
<h1>Convert or calculate most things with ease</h1>
<p style="padding: 30px">

Caculat is built on the thought of openly availble and easy-to-use calculations and conversions
Caculat is currently built and is not complete and many conversions and calculations are missing.<br/>
If you want a conversion or calculation faster you could send a mail.


</p>
<div class="cardRow">
  <NCard>
  <h2>Easy to use</h2>
    Caculat is easy to use for everyone.
  </NCard>
    <NCard>
    <h2>Current state</h2>
    Caculat is underdevelopment, Caculat will never be complete because there are loads of calculations that can be done.
  </NCard>
    <NCard>
    <h2>Contact</h2>
    Caculat is open for improvement. If there is any issue or missing feature request it by sending a mail to <a href="mailto:contact@exceptbytes.com?subject=Caculat">contact@exceptbytes.com</a>
  </NCard>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
// import { NIcon,NCard } from "naive-ui";
import pkg from 'naive-ui';
const { NCard } = pkg;
export default {
  
  name: 'Home',
   components: {
    NCard
  },
    setup() {
    useHead({
      // Can be static or computed
      title: "caculat",
      meta: [
        {
          name: `description`,
          content: "Convert or calculate most things with caculat",
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
.NCard {
  max-width: 30%;
}
.cardRow{
  display:flex;
  justify-content:space-evenly;
  padding: 15px 0;
}
a {
  color: #2660A4;
}
@media (max-width: 600px) {
            .cardRow {
            flex-direction:column;
              align-items:center;
              
            }
            .NCard {
              max-width: 100%;
            }
}
</style>
