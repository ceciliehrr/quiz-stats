<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
//import Dashboard from "./components/Dashboard.vue";
//import HistoryStats from "./components/HistoryStats.vue";
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    //HistoryStats,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  background-color: #020218;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
