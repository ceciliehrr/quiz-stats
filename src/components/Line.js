/***
 *
 * Used chart.js
 * And learned chart.js from:
 * https://blog.vanila.io/chart-js-tutorial-how-to-make-gradient-line-chart-af145e5c92f9
 *
 * */
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
    extends: Line,
    mixins: [reactiveProp],
    watch: {
        chartData: {
            handler: function() {
                this.$data._chart.config.data.datasets[0].backgroundColor = this.gradient2;
                //this.$data._chart.config.data.datasets[1].backgroundColor = this.gradient2;
                //this.$data._chart.config.data.datasets[2].backgroundColor = this.gradient3;
                this.$data._chart.update();
            },
        },
    },
    data() {
        return {
            gradient: {},
            gradient2: {},
            gradient3: {},
            options: {
                responsive: true,
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                },
            },
        };
    },
    mounted() {
        this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 650);
        this.gradient.addColorStop(0, "rgba(255, 130, 116, 0.5)");
        this.gradient.addColorStop(0.5, "rgba(255, 130, 116, 0.25)");
        this.gradient.addColorStop(1, "rgba(255, 130, 116, 0)");

        this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 650);
        this.gradient2.addColorStop(0, "rgba(67, 248, 182, 0.5)");
        this.gradient2.addColorStop(0.5, "rgba(67, 248, 182, 0.25)");
        this.gradient2.addColorStop(1, "rgba(67, 248, 182, 0)");

        this.gradient3 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 650);
        this.gradient3.addColorStop(0, "rgba(249, 198, 107, 0.5)");
        this.gradient3.addColorStop(0.5, "rgba(249, 198, 107, 0.25)");
        this.gradient3.addColorStop(1, "rgba(249, 198, 107, 0)");

        this.renderChart(this.chartData, this.options);
    },
};