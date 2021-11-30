<template>
  <div>
    <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad">
      <naver-info-window
        class="info-window"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
      </naver-info-window>
      <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>
      <naver-ground-overlay
        :bounds="{south:36.7,north:36.9,west:126.5,east:127.5}"/>
    </naver-maps>
  </div>
</template>

<script>
// lat(위도), lng(경도),  DB에 저장 마커랑 main화면도 옮겨짐
// table : maker
// value : lat, lng, title, context, homepageUrl, number
  export default {
    name: 'HelloWorld',
    data() {
      return {
        width: 800,
        height: 800,
        info: false,
        marker: null,
        count: 1,
        map: null,
        isCTT: false,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 10,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true,
        },
        initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
      }
    },
    computed: {
      hello() {
        return `Hello, World! × ${this.count}`;
      }
    },
    methods: {
      onLoad(vue)
 {
        this.map = vue;
      },
      onWindowLoad(that) {
      },
      onMarkerClicked(event) {
        this.info = !this.info;
      },
      onMarkerLoaded(vue) {
        this.marker = vue.marker;
      }
    },
    mounted() {
      setInterval(() => this.count++, 1000);
    }
  }
</script>
<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>