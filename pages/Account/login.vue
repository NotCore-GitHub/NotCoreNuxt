<template>
    <div class="main">
        <v-container>
            <v-row style="height: 100vh;" justify="center" align="center">
                <v-col cols="12">
                    <h1 class="font-weight-medium text-h3 font-weidth pb-8">Setup Your Account.</h1>
                    <v-card>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="11">
                                    <v-text-field
                                        prepend-inner-icon="mdi-account"
                                        label="Name"
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
                        </v-container>
                    </v-card>
                    <v-row class="mt-15">
                        <v-col cols="8">
                            <span><v-icon>mdi-arrow-left</v-icon> Back</span>
                        </v-col>
                        <v-col class="ml-0" cols="4">
                            <v-btn>
                                Log In
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'blank',
  data() {
    return {
        show1: false,
    }
  },
}
</script>

<style scoped>
    .main{
        background-color: #F2F2F2;
    }

</style>
