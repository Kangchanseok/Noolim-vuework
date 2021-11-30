<template>
  <div class="detail3">
  <Search />
  <Detail1 />
  <Detail2 />
  <Detail4 />
  </div>
</template>

<script>

import Search from '@/components/Search'
import Detail1 from '@/components/Detail1';
import Detail2 from '@/components/Detail2';
import Detail4 from '@/components/Detail4'

export default {
  name: "Detail3",
  created () {
    console.log(this.$route.query.hash_name)
  },
  components: {
    Search,
    Detail1,
    Detail2,
    Detail4
  },
};
</script>


<style scoped>
/* .search{
  margin-top: 0;
  margin-bottom: 0;
  
} */
</style>