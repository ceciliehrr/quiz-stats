<template>
  <div class="chartwrapper">
    <div class="historyChart">
      <line-chart
        :chart-data="datacollection"
        :options="chartOptions"
      ></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./Line.vue";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chartwrapper {
  margin: 0;
  width: 100%;
}
.historyChart {
  max-width: 800px;
  margin: auto;
}
p {
  color: white;
}
@media screen and (max-width: 600px) {
  .chartwrapper {
    width: 95%;
  }
}
</style>
