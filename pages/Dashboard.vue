<template>
<v-container>
    <!--ROW DE FELICIDADES Y TARJETA DE ESTADISTICAS -->
    <v-row>
      <v-col md="4" cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title>¡Felicidades! 🥳</v-card-title>
              <v-card-subtitle>Haz ganado un Trofeo</v-card-subtitle>
              <v-card-text>
                <h2 class="green--text font-weight-bold ml-1">$42.8k</h2>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  small
                  color="blue darken-1"
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
      </v-col>     
        <v-col md="8" cols="12">
        <v-card>       
            <v-card-title>Tarjeta de Estadísticas</v-card-title>
            <v-card-subtitle class="mb-5">Crecimiento total del 48,5%😎 este mes</v-card-subtitle>
              <v-card-text>
                <div class="row">
                  <div class="d-flex align-center col-md-3 col-6">
                      <v-avatar
                          rounded
                          elevation="1"
                          color="blue darken-1"
                      >
                        <v-icon dark>
                          mdi-trending-up
                        </v-icon>
                      </v-avatar>
                    <div class="ms-3">
                      <p class="text-xs mb-0"> Ventas </p>
                      <h3 class="text-xl font-weight-semibold"> 245k </h3>
                    </div>
                  </div>
                  <div class="d-flex align-center col-md-3 col-6">
                      <v-avatar
                          rounded
                          elevation="1"
                          color="purple darken-1"
                      >
                        <v-icon dark>
                          mdi-account
                        </v-icon>
                      </v-avatar>
                    <div class="ms-3">
                      <p class="text-xs mb-0"> Clientes </p>
                      <h3 class="text-xl font-weight-semibold"> 12.5 </h3>
                    </div>
                  </div>
                  <div class="d-flex align-center col-md-3 col-6">
                      <v-avatar
                          rounded
                          elevation="1"
                          color="yellow  darken-1"
                      >
                        <v-icon dark>
                          mdi-tag-faces
                        </v-icon>
                      </v-avatar>
                    <div class="ms-3">
                      <p class="text-xs mb-0"> Productos </p>
                      <h3 class="text-xl font-weight-semibold">  1.54k </h3>
                    </div>
                  </div>
                  <div class="d-flex align-center col-md-3 col-6">
                      <v-avatar
                          rounded
                          elevation="1"
                          color="green darken-1"
                      >
                        <v-icon dark>
                          mdi-currency-usd
                        </v-icon>
                      </v-avatar>
                    <div class="ms-3">
                      <p class="text-xs mb-0"> Ingreso </p>
                      <h3 class="text-xl font-weight-semibold"> $88k </h3>
                    </div>
                  </div>
                </div>
                <!-- <h2 style="color:#958ee8" class="font-weight-bold ml-1">$42.8k</h2> -->
              </v-card-text>       
        </v-card>
      </v-col>
    </v-row>
      <!--ROW DE RESUMEN GENERAL, GANANCIA TOTAL, Y TARJETA DE ESTADISTICAS -->
    <v-row>
      <v-col md="4" cols="12">
      <v-card>
        <v-card-title>Resumen Semanal</v-card-title>
        <v-card-text>
          <div id="chart" class="d-flex align-center">
            <ApexChart type="bar" height="350" :options="chartOptions" :series="series"></ApexChart>
          </div>
        </v-card-text>
        <v-card-actions>
        <v-btn
          block
          color="blue darken-1"
          dark
          elevation="1"                         
          @click="reserve"
        >
         DETALLES          
         </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card>
          <v-card-title>Ganancia Total</v-card-title>
          <v-card-text>
            <div class="d-flex align-center">
            <h1 class="text-4xl font-weight-semibold"> $24,895 </h1>
            </div>
          </v-card-text>
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
            categories: ["L", "M", "M", "J", "V", "S", "D"]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70]
        }]
      }
    },
};
</script>

