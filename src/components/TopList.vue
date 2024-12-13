<template>
  <section class="topList">
    <div class="column">
      <div class="card">
        <section class="header">
          <p class="title">TOPP 5 DATASETT - siste {{ day }} dagene</p>
          <div class="errorMessage">{{ errorMessage }}</div>
          <label for="tidsperiode">Legg inn tidsperiode:</label>
          <input
            autocomplete="off"
            :placeholder="placeh"
            type="number"
            v-model.number="newDay"
            id="tidsperiode"
            @keyup.enter="updateList"
          />
          <button type="button" class="update-list-button" @click="updateList">
            <SearchIcon />
          </button>
        </section>
        <section v-if="errored">
          <p>Kan ikke finne data</p>
        </section>
        <section v-else>
          <div class="list">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th></th>
                  <th>Rank</th>
                  <th>Prosent riktig</th>
                  <th>Antall lag</th>
                </tr>
              </thead>
            </table>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody v-for="(item, index) in showDatasetList" :key="index">
                  <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.plass }}</td>
                    <td>{{ item.prosent }}</td>
                    <td>{{ item.antall_lag }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="!showAll">
              <button
                type="button"
                class="show-all-button"
                @click="showAll = true"
              >
                Vis alle
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="show-all-button"
                @click="showAll = false"
              >
                Vis topp 5
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import SearchIcon from "../assets/SearchIcon.vue";
import stats from "../data/quiz-stats.json";

export default {
  name: "TopList",
  components: {
    SearchIcon,
  },
  setup() {
    // Reactive state variables
    const quizStats = ref(stats);
    const day = ref(7);
    const newDay = ref("");
    const placeh = "antall dager";
    const errorMessage = ref("");
    const showAll = ref(false);

    // Computed property for the dataset list
    const showDatasetList = computed(() => {
      return showAll.value ? quizStats.value : quizStats.value.slice(0, 5);
    });

    // Methods
    const updateList = () => {
      if (newDay.value === "") {
        errorMessage.value = "FEIL: Mangler et tall";
      } else if (!Number.isInteger(newDay.value)) {
        errorMessage.value = "FEIL: Desimaler er ikke lov";
      } else {
        day.value = newDay.value;
        newDay.value = "";
        errorMessage.value = ""; // Clear error message
      }
    };

    // Expose variables and methods to the template
    return {
      quizStats,
      day,
      newDay,
      placeh,
      errorMessage,
      showAll,
      showDatasetList,
      updateList,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h1,
h2,
p {
  color: #f9c66b;
  min-height: 15px;
}
.header {
  width: 100%;
}
.errorMessage {
  color: #ff8274;
}
.column {
  float: left;
  width: 40%;
  padding: 0 10px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin-bottom: 15px;
  background: hsla(0, 0%, 100%, 0.05);
  height: 530px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  font-size: 20px;
  margin-top: 10px;
}
label {
  color: grey;
}
input {
  margin: 0 0 35px 25px;
  width: 120px;
  height: 35px;
  border: none;
  padding: 4px 0;
  border-bottom: solid 1px #3c3c4e;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    #43f8b6 4%
  );
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  font-size: 25px;
  color: #3c3c4e;
}
input:focus {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
::placeholder {
  color: grey;
  font-size: 15px;
}
.searchIcon:hover {
  fill: #43f8b6;
  transition: 0.4s;
}
.update-list-button {
  color: grey;
  background: none;
  border: none;
}
.update-list-button:hover {
  cursor: pointer;
}
.update-list-button:focus {
  outline-color: #43f8b6;
}
.show-all-button {
  background-color: transparent;
  color: grey;
  border: 2px solid grey;
  padding: 5px 12px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 10px;
  cursor: pointer;
}
.show-all-button:hover {
  border-color: #43f8b6;
  transition: 0.4s;
}
.show-all-button:focus,
.show-all-button:active {
  outline-color: #43f8b6;
  border-color: #43f8b6;
}

table {
  margin: 0 auto;
  width: 80%;
  table-layout: fixed;
}
.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
}
th {
  padding: 5px;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
tr:hover {
  background-color: rgba(60, 60, 78, 0.5);
  transition: 0.4s;
}

@media screen and (max-width: 600px) {
  .card {
    max-height: auto;
    min-height: auto;
  }
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .loader {
    margin: 0 auto;
  }
}
</style>
