<template>
  <div class="dashboard">
    <div class="image-wrapper">
      <img v-bind:src="image" class="image" />
    </div>
    <h1>{{ title }}</h1>
    <h2>Hvor mange riktige i prosent</h2>
    <!--<Wrapper />-->
  </div>
</template>

<script>
//import Wrapper from "@/components/Wrapper";
import image from "@/assets/jonas.jpg";
export default {
  name: "Dashboard",
  components: {
    // Wrapper,
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
  font-size: 18px;
}
.dashboard {
  background-color: #020218;
  padding: 2px;
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
