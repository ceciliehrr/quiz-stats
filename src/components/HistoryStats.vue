<!--Quiz stats - score / goal * 100 = prosent 
-->
<template>
  <div class="chartwrapper">
    <div class="historyChart">
      <line-chart :chart-data="datacollection"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./Line.js";
import stats from "@/data/quiz-stats.json";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {},
      quizStats: stats,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    getCount() {
      return this.quizStats.map((obj) => obj.prosent.toString());
    },
    getLabels() {
      var value = [];
      value = this.quizStats.map((obj) => obj.dato.toString());
      return value.map(this.dateToLabel);
    },
    dateToLabel(date) {
      const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAI",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OKT",
        "NOV",
        "DES",
      ];
      const [year, day, month] = date.split("-");
      const monthName = monthNames[parseInt(month, 10) - 1];
      return day + "-" + monthName + "-" + year;
    },
    fillData() {
      this.datacollection = {
        labels: this.getLabels(),
        datasets: [
          {
            label: "Quiz-stats i prosent",
            backgroundColor: this.gradient2,
            borderColor: "#43f8b6",
            pointBackgroundColor: "#43f8b6",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            data: this.getCount(),
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.chartwrapper {
  margin: 0;
  width: 50%;
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
    width: 100%;
  }
}
</style>
