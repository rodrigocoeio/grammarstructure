<template>
  <main>
    <img src="/images/grammarstructure.png" class="Logo">

    <br><br>

    <!-- <select class="form form-select" v-model="cardSorting">
      <option value="alpha">Alphabetical Sorting</option>
      <option value="shuffle">Shuffle Cards</option>
    </select> -->

    <category-select :categories="categories"></category-select>

    <button class="btn btn-primary" @click="startGame">Start Game</button>

  </main>
</template>
  
<script>
import store from "$/store.js";
import CategorySelect from "./CategorySelect.vue";

export default {
  async beforeMount() {
    await store.loadCategories();
  },

  data() {
    return {
      cardSorting: store.game.cardSorting
    }
  },

  computed: {
    categories() {
      return store.categories;
    }
  },

  watch: {
    cardSorting(value) {
      store.game.cardSorting = value;
    }
  },

  methods: {
    startGame() {
      return store.startGame();
    }
  },

  components: {
    CategorySelect
  }
}
</script>
  
<style scoped>
main {
  padding: 15px;
}

.Logo {
  max-width: 500px;
}

select {
    max-width: 200px;
    margin: auto;
    margin-bottom: 15px;
}
</style>