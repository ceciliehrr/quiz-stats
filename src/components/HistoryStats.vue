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
import stats from "@/data/quiz-statsul.json";

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
      const stats8 = this.quizStats.slice(0, 7);
      return stats8.map((obj) => obj.prosent.toString());
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
            label: "Quiz-stats i prosent - de siste 7 quizzene",
            backgroundColor: this.gradient2,
            borderColor: "#43f8b6",
            pointBackgroundColor: "#43f8b6",
            pointBorderWidth: 8,
            pointHoverRadius: 20,
            pointHoverBorderWidth: 1,
            pointRadius: 8,
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
  width: 90%;
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
