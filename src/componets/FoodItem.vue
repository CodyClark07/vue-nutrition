<template>
  <div class="foodItem col-6">
    <div class="row">
      <div class="col-12">
        <h1>Results</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="food">
          <li v-for="food in foods" :key="food.id" @click="activeFoodItem(food)">{{food.food_name}}</li>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import FoodInfo from "./FoodInfo";
export default {
  name: "FoodItem",
  data() {
    return {};
  },
  computed: {
    foods() {
      return this.$store.state.foodItem;
    },
  },
  methods: {
    activeFoodItem(food) {
      this.$store.dispatch("activeFoodItem", food);
    },
  },
  components: {
    FoodInfo,
  },
};
</script>


<style scoped>
</style>