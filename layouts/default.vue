<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-img src="/NC.png" max-height="40" max-width="55"></v-img>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        {{$auth.$storage.getUniversal('User')}}
        <v-btn text @click="$auth.logout($auth.$storage.getUniversal('token'))">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/Login">Login</v-btn>
      </div>
      <v-btn icon @click.stop="switchDarkMode">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-avatar>
        <img
          v-bind:src="'https://i.pinimg.com/originals/10/23/c1/' + avatar"
          alt="profileName"
          @click.stop="rightDrawer = !rightDrawer"
        />
      </v-avatar>
    </v-app-bar>
    <v-main class="vmain_bg">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <div>Test</div>
        <!-- <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: true, //Menu & Nav are Separed
      drawer: true, //Menu open from beginning
      fixed: true, //Menu Fixed
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "Dashboard",
        },
        {
          icon: "mdi-apps",
          title: "Inspire",
          to: "inspire",
        },
      ],
      //Menu from profile
      miniVariant: false, //Show mini menu with icons
      right: true, //Minu menu position
      rightDrawer: false,
      title: "NotCore",
      avatar: "1023c1935f502c2fa799b6593a204131.jpg",
      profileName: "Spike",
    };
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
    },
    async logout () { 
            await this.$auth.logout() 
            this.$router.push('login');
    },
  },
};
</script>

<style scoped>
 .vmain_bg {
   background: #FAFAFA
;
 }
</style>