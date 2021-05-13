<template>
  <div class="container">
    tutorial from  https://vueschool.io/courses/vuejs-fundamentals
    <h1>{{ header.toLocaleUpperCase() }}</h1>
    <button
      class="btn btn-primary"
      v-if="state === 'default'"
      @click="changeState('edit')"
    >
      Add Item
    </button>
    <button v-else @click="changeState('default')" class="btn btn-cancel">
      Cancel
    </button>
    <div v-if="state === 'edit'" class="add-item-form">
      <input
        v-model="newItem"
        @keyup.enter="saveItem"
        type="text"
        placeholder="add an item"
      />
      <p>{{ characterCount }} characters</p>
      <button
        class="btn btn-primary"
        :disabled="newItem.length === 0"
        @click="saveItem"
      >
        Save Item
      </button>
    </div>
    <ul>
      <li
        v-for="item in items"
        :class="[item.purchased ? 'strikeout' : '']"
        @click="togglePurchased(item)"
        :key="item['@id']"
      >
        {{ item.label }}
      </li>
    </ul>
    <p v-if="items.length === 0">Nice job ! You've bought all your items</p>
  </div>
</template>

<script>
  export default {
    name: "Fundamentals",
    components: {},
    data() {
      return {
        state: "default",
        header: "shopping list app",
        newItem: "",
        items: [
          {
            label: "10 party hats",
            purchased: false,
          },
          {
            label: "2 board games",
            purchased: true,
          },
          {
            label: "20 cups",
            purchased: false,
          },
        ],
      };
    },
    computed: {
      reversedItems() {
        return this.items.slice(0).reverse();
      },
      characterCount() {
          return this.newItem.length;
      }
    },
    methods: {
      saveItem() {
        this.items.push({
          label: this.newItem,
          purchased: false,
        });
        this.newItem = "";
      },
      changeState(newState) {
        this.state = newState;

        this.newItem = "";
      },
      togglePurchased(item) {
        item.purchased = !item.purchased;
      },
    },
  };
</script>

<style lang="scss">
.container {
    width: 50%;
    text-align: left;
}
  .strikeout {
    text-decoration-line: line-through;
  }
</style>
