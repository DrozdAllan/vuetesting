<template>
  <nav>
      <router-link to="/brazil">Brazil</router-link> | 
      <router-link to="/panama">Panama</router-link> | 
      <router-link to="/hawaii">Hawaii</router-link> | 
      <router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  a {
    color: #a88f3b;

    &.router-link-exact-active {
      color: #ca1c1c;
    }
  }
}
</style>
