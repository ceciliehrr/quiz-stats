<template>
  <div class="row">
    <Score />
    <!--<TopList />-->
  </div>
</template>

<script>
//import TopList from "@/components/TopList";
import Score from "./Score.vue";
export default {
  name: "Wrapper",
  components: {
    //TopList,
    Score,
  },
  data() {
    return {
      title: "Wrapper",
    };
  },
};
</script>

<style></style>
