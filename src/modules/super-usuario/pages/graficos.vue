<template>
  <h2>Entrevistas</h2>
  <div style="max-width: 400px">
    <vue3-chart-js v-bind="{ ...pieChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const pieChart = {
      type: "pie",
      data: {
        labels: ["Pedro", "Jaime", "Julia", "Luis"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>
