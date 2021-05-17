<template>
  <section class="destination">
    <go-back />
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`../assets/${destination.image}`)"
        :alt="destination.name"
      />
    </div>
  </section>
</template>

<script>
  import store from "@/store.js";
  import GoBack from "../components/GoBack.vue";

  export default {
    components: {
      GoBack,
    },
    data() {
      return {
        destinationId: this.$route.params.id,
      };
    },
    computed: {
      destination() {
        return store.destinations.find(
          (destination) => destination.id === this.destinationId
        );
      },
    },
  };
</script>

<style></style>
