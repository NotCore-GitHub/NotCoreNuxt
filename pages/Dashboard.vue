<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <div id="chart">
          <ApexChart type="bar" height="350" :options="chartOptions" :series="series"></ApexChart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
</script>