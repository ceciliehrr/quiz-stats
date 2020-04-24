<template>
  <div id="app">
    <Dashboard />
    <HistoryStats />
  </div>
</template>

<script>
//import Dashboard from "./components/Dashboard.vue";
import HistoryStats from "./components/HistoryStats.vue";
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    HistoryStats,
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
  height: 100%;
  background-color: #020218;
}
body {
  margin: 0;
}
</style>
