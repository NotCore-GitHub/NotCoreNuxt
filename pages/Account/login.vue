<template>
    <div class="main">
        <v-container>
            <form v-on:submit.prevent="login">
            <v-row style="height: 100vh;" justify="center">
                <v-col cols="12">
                    <h1 class="font-weight-medium text-h3 font-weidth pb-8">Setup Your Account.</h1>
                    <v-card>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="11">
                                    <v-text-field
                                        prepend-inner-icon="mdi-account"
                                        label="Name"
                                        id="Usuario"
                                        v-model="usuario"
                                    ></v-text-field>
                                    <v-text-field
                                        prepend-inner-icon="mdi-email"
                                        label="Email"
                                    ></v-text-field>
                                    <v-text-field
                                        :type="show1 ? 'text' : 'password'"
                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        prepend-inner-icon="mdi-lock"
                                        label="Password"
                                        hint="At least 8 characters"
                                        counter
                                        @click:append="show1 = !show1"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <!-- <v-col cols="8">
                                    <span><v-icon>mdi-arrow-left</v-icon> Back</span>
                                </v-col> -->
                                <v-col cols="12">
                                    <v-btn type="submit">
                                        Log In
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            </form>
        </v-container>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  layout: 'blank',
//   data() {
//     return {
//         show1: false,
//     }
//   },
  data: function(){
    return{
        usuario: "",
        password: "",
        error: false,
        error_msg: "",
        show1: false,
    }
  },
  methods: {
    login(){
        let json = {
          "usuario" : this.usuario,
          "password": this.password
        };
        axios.post('http://solodata.es/auth', json)
        .then( data =>{
           if(data.data.status == "ok"){
             localStorage.token = data.data.result.token;
             this.$router.push('dashboard');
           }else{
             this.error = true;
             this.error_msg = data.data.result.error_msg;
           }
        })
    }
  },
}
</script>

<style scoped>
    .main{
        background-color: #F2F2F2;
    }

</style>
