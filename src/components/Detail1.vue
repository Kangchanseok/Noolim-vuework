<template>
  <div class="gallery"  style="width: 25rem" >
    <div class="gallery-panel"
         v-for="location in locations" :key="location.loca_no"
         @click="goDetail(location.loca_no)">
          <div class="contents">
          <img class="test" :src= "location.picture1"
           height="320"
           width="350">
          <h3 class="test-text">{{location.title}}</h3>
          <p>{{ location.hash_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {findLocationList, findHashName} from '../service'
import EventBus from './EventBus'

export default {
  name: 'gallery',

  async created () {
    // 전체, vuex에 박고
    const ret = await findLocationList()
    this.locations = ret.data

    // 해시네임, vuex로 바꾸고
    if (this.$route.query.hash_name != null) {
      this.locations = this.$route.query.hash_name
    }
    // console.log(await this.$store.dispatch("viewtest"))
    await EventBus.$on('changePage', (ret2) => {
      this.ret2 = ret2
      this.locations = this.ret2
      // })]
      // console.log(this.locations)
      // this.locations = this.$store.getters['testing']
      // console.log(this.$store.getters['justtest'])
      // this.locations = mapGetters({
      //   'ret'
      // })
    })
  },

  data () {
    return {
      locations: [
        {
          loca_no:"",
              title: "",
              picture1: "",
              // picture2: "",
              // picture3: "",
              // picture4: "",
              // picture5: "",
              // context:"",
              // tag:"",
              hash_name:"",
              hash_no:''
            }
          ],
        }
    },
    methods:{
     async goDetail(loca_no){
      // console.log(this.$store.getters['choiceSearch'])
      const ret2 = await findHashName({loca_no});
      const {data} = ret2;
      this.hashs = data.hash_name;
      this.$router.push({
      path: `/detail3/locationdetail/${loca_no}`
      })
      },
    },
};


</script>

<style >

.gallery {
    flex-wrap: wrap;
    padding: 3rem 0;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    margin-top: 100px;
}

.contents{
    margin: 5px;
    border: 1px solid rgb(196, 196, 196);
    cursor: pointer;
}

/* h3 {
    display: inline-block;
} */
</style>