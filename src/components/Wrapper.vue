<template>
  <div class="row">
    <TopList />
  </div>
</template>

<script>
import TopList from "@/components/TopList";

export default {
  name: "Wrapper",
  components: {
    TopList,
  },
  data() {
    return {
      title: "Wrapper",
    };
  },
};
</script>

<style>
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
