<template>
  <n-layout-footer bordered class="footer">
    <div class="menulists">
      <ul>
        <!-- <li><RouterLink :to="{name: 'About'}"><p>About us</p></RouterLink></li> -->
        <li><RouterLink :to="{name: 'sitemap'}"><p>sitemap</p></RouterLink></li>
      </ul>
    </div>
    <div class="inline">
      <p>© {{new Date().getFullYear()}}</p>
      <p>Made for you</p>
    </div>

  </n-layout-footer>
  </template>
<style scoped>
ul{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}
.inline{
  display: flex;
  justify-content: center;
}
.inline p{
  margin: 0 5px;
}
a {
  color: #2660A4;
}
</style>