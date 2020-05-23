<template>
  <div id="app">
    <LeftMenu></LeftMenu>

    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
import LeftMenu from "./components/LeftMenu.vue";
export default {
  components: { LeftMenu }
};
</script>
