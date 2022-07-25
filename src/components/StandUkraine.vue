<template>
<div>
<p>We stand with Ukraine</p>
</div>
</template>

<script>
export default {
  name: 'StandUkraine',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 8px solid #005BBB;
  background-color: #FFD500;
  max-height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
}
p{
  font-weight: bold;
  font-size: 1.2em;
}
</style>
