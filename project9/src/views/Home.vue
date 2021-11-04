<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <Main msg="NOOLIM" />
  <Popular />
  <Map />
  <test />
  </div>

</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue"; 
import Popular from '@/components/Popular.vue';
import Map from '@/components/Map/link-map.vue';
import test from '@/components/test.vue';


export default {
  name: "Home",
  components: {
    Main,
    Popular,
    Map,
    test
  },
};
</script>


<style scoped>


</style>