<template>
  <div>
    <div>
      code by
      https://vueschool.io/lessons/vue-router-named-routes-and-params 
      <div class="home">
        <h1><router-link :to="{name: 'invoices'}">Invoices</router-link></h1>
        <h1>all destinations</h1>
        <div class="destinations" id="experience"></div>
        <div v-for="destination in destinations" :key="destination.name">
          <router-link :to="{name: 'DestinationDetails', params: {id: destination.id}, hash: '#experience'}">
            <h2>{{ destination.name }}</h2>
          </router-link>
          <figure>
            <router-link :to="{ name: 'DestinationDetails', params: {id: destination.id} }">
              <img
                :src="require(`@/assets/${destination.image}`)"
                :alt="destination.name"
              />
            </router-link>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
  import store from "@/store.js";

  export default {
    name: "Router",
    components: {
    },
    data() {
      return {
        destinations: store.destinations,
      };
    },
  };
</script>

<style lang="scss" scoped>
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
