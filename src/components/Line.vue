<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
import { Line } from "vue-chartjs";

// Register required Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default defineComponent({
  name: "GradientLineChart",
  components: { Line },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const canvas = ref(null);
    const gradient = ref(null);
    const gradient2 = ref(null);
    const gradient3 = ref(null);

    const options = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 16, // Increase font size for legend labels
            },
            color: "white", // For white font in legend labels
          },
        },
        tooltip: {
          bodyFont: {
            size: 16, // Increase font size for tooltip text
          },
        },
      },
    };

    const createGradient = (ctx, colorStops) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 650);
      colorStops.forEach(([offset, color]) =>
        gradient.addColorStop(offset, color)
      );
      return gradient;
    };

    onMounted(() => {
      const ctx = canvas.value.getContext("2d");

      // Create gradients
      gradient.value = createGradient(ctx, [
        [0, "rgba(255, 130, 116, 0.5)"],
        [0.5, "rgba(255, 130, 116, 0.25)"],
        [1, "rgba(255, 130, 116, 0)"],
      ]);

      gradient2.value = createGradient(ctx, [
        [0, "rgba(67, 248, 182, 0.5)"],
        [0.5, "rgba(67, 248, 182, 0.25)"],
        [1, "rgba(67, 248, 182, 0)"],
      ]);

      gradient3.value = createGradient(ctx, [
        [0, "rgba(249, 198, 107, 0.5)"],
        [0.5, "rgba(249, 198, 107, 0.25)"],
        [1, "rgba(249, 198, 107, 0)"],
      ]);

      // Update chart data with gradients
      props.chartData.datasets[0].backgroundColor = gradient2.value;

      // Render the chart
      const chart = new ChartJS(ctx, {
        type: "line",
        data: props.chartData,
        options,
      });

      return chart;
    });

    return {
      canvas,
      gradient,
      gradient2,
      gradient3,
    };
  },
});
</script>
