<template>
  <div class="dashboard">
    <div class="image-wrapper">
      <img v-bind:src="image" class="image" />
    </div>
    <h1>{{ title }}</h1>
    <HistoryStats />
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import HistoryStats from "@/components/HistoryStats.vue";
import image from "@/assets/jonas.jpg";
export default {
  name: "Dashboard",
  components: {
    Wrapper,
    HistoryStats,
  },
  data() {
    return {
      title: "QUIZ-STATS",
      image: image,
    };
  },
};
</script>
<style>
h1 {
  font-size: 25px;
  color: white;
}
h2 {
  color: grey;
  font-size: 13px;
}
.dashboard {
  background-color: #020218;
  margin: 0;
}
.image-wrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}
.image {
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
@media screen and (max-width: 600px) {
  .image {
    width: 100%;
  }
}
</style>
