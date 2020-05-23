<template>
  <div id="LeftMenu">
      <v-container height="400" class="overflow-hidden">
        <v-navigation-drawer
          v-model="drawer"
          :permanent="permanent"
          absolute
          dark
        >
        <router-link to="/">HelloWorld</router-link>
          <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg" />
              </v-list-item-avatar>
    
              <v-list-item-content>
                <v-list-item-title>Jawad Ahmed</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
    
            <v-divider></v-divider>
          </v-list>
        </v-navigation-drawer>
      </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: "#LeftMenu",
  data() {
    return {
      drawer: true,
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  }
};
</script>
