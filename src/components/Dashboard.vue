<template>
  <div class="dashboard">
    <div class="image-wrapper">
      <img src="/jonas.jpg" alt="Dashboard Image" class="image" />
    </div>
    <h1>{{ title }}</h1>

    <HistoryStats />
    <Wrapper />
  </div>
</template>

<script>
import { ref } from "vue";
import Wrapper from "./Wrapper.vue";
import HistoryStats from "./HistoryStats.vue";
export default {
  name: "Dashboard",
  components: {
    Wrapper,
    HistoryStats,
  },
  setup() {
    const title = ref("QUIZ-STATS");

    return {
      title,
    };
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  color: white;
}
.image {
  width: 250px;
  margin: 20px;
}
</style>
