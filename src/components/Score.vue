<template>
  <section class="scores">
    <div class="column" v-for="filterKpi in filteredKpi" :key="filterKpi.id">
      <div class="card">
        <section class="header">
          <p class="name">{{ filterKpi.name }}</p>
        </section>
        <section v-if="errored">
          <p>Kan ikke finne data</p>
        </section>
        <section v-else>
          <Loader v-if="loading"></Loader>
          <div v-else>
            <div class="kpiOne" v-if="filterKpi.id == 1">
              <div class="score">{{ allDatasets }}</div>
              <p class="sub">DATASETT</p>
            </div>
            <div class="kpiTwo" v-if="filterKpi.id == 2">
              <div class="score">{{ usedDatasetScoreInMillions }}</div>
              <p class="sub">MILLIONER</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import Loader from "@/animations/Loader";

export default {
  name: "Score",
  components: {
    Loader
  },
  props: {
    stats: Array
  },
  data() {
    return {
      datasets: [],
      errored: false,
      loading: true,
      usedDatasetScore: {}
    };
  },

  computed: {
    usedDatasetScoreInMillions() {
      const sum = this.usedDatasetScore / 10 ** 6;
      return sum.toLocaleString("nb", { maximumFractionDigits: 1 });
    }
  },
  mounted() {
    this.getAllDatasets(conf.urls.metadataDatasets);
    this.getUsedDataset(conf.urls.sumUsedDatasets);
    this.intervalFetchData(conf.urls.metadataDatasets, this.getAllDatasets);
    this.intervalFetchData(conf.urls.sumUsedDatasets, this.getUsedDataset);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/variables";
@import "@/assets/sass/fontStyle.scss";
* {
  box-sizing: border-box;
}
h1,
h2,
p {
  color: $primary-text-color;
  min-height: 15px;
}
.header {
  width: 100%;
}
.name {
  margin-top: 40px;
  font-size: 20px;
}
.score {
  color: $positive-color;
  font-size: 4vw;
  line-height: 100%;
  animation-name: fadeIn;
  animation-duration: 1s;
}
.sub {
  font-size: 20px;
  font-family: "Oslo Regular";
  color: $sub-text-color;
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
  height: 530px;
  display: flex;
  flex-direction: column;
}
.card > :nth-child(1) {
  height: 30%;
}
.card > :nth-child(2) {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .card {
    max-height: auto;
    min-height: auto;
  }
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .score {
    margin: 0;
    font-size: 15vw;
  }
  .loader {
    margin: 0 auto;
  }
}
</style>
