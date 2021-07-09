<template>
  <apexchart
    class="mt-8"
    width="800"
    type="bar"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  props: ["currency"],
  data() {
    return {
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        colors: ["#14aa00"],
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "Valor",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  mounted() {
    console.log(Object.keys(this.currency), Object.values(this.currency));
    this.series.data = Object.keys(this.currency);
    this.options.xaxis.categories = Object.values(this.currency);
  },
};
</script>
