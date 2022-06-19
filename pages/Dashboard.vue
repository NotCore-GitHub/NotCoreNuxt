<template>
  <v-container>
    <v-row>
      <v-col md="4" cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title>¡Felicidades Spike! 🥳</v-card-title>
              <v-card-subtitle>Haz ganado un Trofeo</v-card-subtitle>
              <v-card-text>
                <h2 style="color:#958ee8" class="font-weight-bold ml-1">$42.8k</h2>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  large
                  color="#958ee8"
                  dark
                  elevation="1"                         
                  @click="reserve"
                >
                  VER VENTAS
                </v-btn>
              </v-card-actions>
            </div>

            <v-img
              class="mt-10 mr-5"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="100"
              max-width="80"
              src="https://i.imgur.com/zlmA07e.png"
            ></v-img>
            </div>
        </v-card>
        <!-- <div id="chart">
          <ApexChart type="bar" height="350" :options="chartOptions" :series="series"></ApexChart>
        </div> -->
      </v-col>
          <v-col md="8" cols="12">
        <v-card>
         <v-card-title>Tarjeta de Estadísticas</v-card-title>
         <v-card-subtitle>Crecimiento total del 48,5%😎 este mes</v-card-subtitle>
        </v-card>
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