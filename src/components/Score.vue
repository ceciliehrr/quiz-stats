<template>
  <section class="scores">
    <div class="column" v-for="items in sortedCards" :key="items.id">
      <div class="card">
        <p class="name">{{ items.hvor }}</p>
        <hr />
        <div class="score">{{ items.prosent }}%</div>
        <p class="sub">RIKTIGE SVAR</p>
        <div class="info first">
          Dato:
          <div class="two">{{ dateToLabel(items.dato) }}</div>
        </div>
        <div class="info">
          Plass:
          <div class="two">{{ items.plass }} av {{ items.antall_lag }}</div>
        </div>
        <div class="info">
          Score:
          <div class="two">{{ items.score }} av {{ items.goal }} spørsmål</div>
        </div>
        <div class="info last">
          Lagkompiser med:
          <span class="two" v-for="medl in items.quizmedlemmer" :key="medl.id">
            {{ medl + ", " }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import info from "../data/quiz-stats.json";

export default {
  name: "Score",
  setup() {
    const quizInfo = ref(info);

    const sortCards = (array) => {
      return array.sort((a, b) => {
        if (a.prosent < b.prosent) return 1;
        if (a.prosent > b.prosent) return -1;
        return 0;
      });
    };

    const sortedCards = computed(() => sortCards(quizInfo.value));

    const dateToLabel = (date) => {
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
      return `${day}. ${monthName} ${year}`;
    };

    return {
      sortedCards,
      dateToLabel,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.scores {
  margin-top: 50px;
}
h1,
h2,
p {
  color: white;
  min-height: 15px;
}
.info {
  color: grey;
}
.first {
  margin-top: 15px;
}
.last {
  margin-top: 15px;
}
.info .two {
  color: white;
}
hr {
  border: 1px dashed #3c3c4e;
  width: 50%;
  text-align: left;
  margin-left: 0;
}
.card {
  text-align: left;
  animation-name: fadeIn;
  animation-duration: 1s;
}
.name {
  font-size: 20px;
}
.score {
  color: #43f8b6;
  font-size: 30px;
  line-height: 100%;
}
.sub {
  font-size: 13px;
  color: #3c3c4e;
  margin: 0;
}
.column {
  float: left;
  width: 20%;
  padding: 0 10px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin-bottom: 15px;
  background: hsla(0, 0%, 100%, 0.05);
}
/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  /* Responsive columns */
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  /* Style the counter cards */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
  }
  .score {
    margin: 0;
    font-size: 30px;
  }
  .loader {
    margin: 0 auto;
  }
}
</style>
