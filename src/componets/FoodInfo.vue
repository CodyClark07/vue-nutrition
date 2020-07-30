<template>
  <div class="food row">
    <div class="col" v-if="activeFood.food_name">
      <img class="card-img-top" :src="activeFood.photo.thumb" alt />

      <div class="card-body">
        <h3 class="card-title">{{activeFood.brand_name}}</h3>
        <h4 class="card-text">{{activeFood.food_name}}</h4>
        <h5 class="card-text">{{activeFood.nf_calories}} calories</h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FoodInfo",
  props: ["food"],
  data() {
    return {};
  },
  computed: {
    activeFood() {
      return this.$store.state.activeFood;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>