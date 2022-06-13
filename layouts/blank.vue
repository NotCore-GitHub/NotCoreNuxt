<template>
  <v-app dark>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    const theme = localStorage.getItem("themeColor");
      if (theme) {
        if (theme == "true") {
          this.$vuetify.theme.dark = true;
        } else this.$vuetify.theme.dark = false;
      }
  },
  methods: {
    switchDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("themeColor", this.$vuetify.theme.dark);
    }
  }
}
</script>
