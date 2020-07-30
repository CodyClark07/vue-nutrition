<template>
  <div class="food">
    <div class="row">
      <div class="col">
        <form @submit.prevent="searchFood">
          <input type="text" placeholder="Search for Food Item" v-model="query" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <foodItem />
      <food-info />
    </div>
  </div>
</template>


<script>
import FoodItem from "../componets/FoodItem";
import FoodInfo from "../componets/FoodInfo";
export default {
  name: "food",
  data() {
    return {
      query: "",
    };
  },
  computed: {},
  methods: {
    searchFood() {
      this.$store.dispatch("searchApi", this.query);
    },
  },
  components: {
    FoodItem,
    FoodInfo,
  },
};
</script>


<style scoped>
</style>
