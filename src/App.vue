<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/fundamentals">Fundamentals</router-link> |
      <router-link to="/components">Components</router-link> |
      <router-link to="/router">Router</router-link>
    </div>
    <div id="navigation">
      <TheNavigation />
    </div>
    <transition name="slide" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation';

export default {
  name: "App",
  components: {
    TheNavigation
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

#navigation {
  padding-left: 350px;
  margin-top: -20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
