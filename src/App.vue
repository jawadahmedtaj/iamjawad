<template>
  <div id="app">
    <v-row>
      <v-col :sm="2">
        <LeftMenu></LeftMenu>
      </v-col>
      <v-col :sm="10">
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss"></style>

<script>
import LeftMenu from "./components/LeftMenu.vue";
export default {
  components: { LeftMenu }
};
</script>
