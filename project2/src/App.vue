<template>
<div class="app">
    <Navbar/>
    <router-view></router-view>
    <Main />
    <PopularPlaces />
    <!-- <carousel >
      <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
          <img :src="slide" :alt="slide">
      </carousel-slide>
    </carousel> -->
    <Location />


	<link-map />

    <Footer />
    <BackToTop />
    
</div>



</template>

<script>
import Navigation from './components/Navbar'
import MainComponents from './components/Main'
import PopularComponents from './components/PopularPlaces'
// import Carousel from './components/Carousel'
// import CarouselSlide from './components/CarouselSlide'
import LocationComponents from './components/Location'
import LinkMap from './components/link-map.vue'
import FooterComponents from './components/Footer'
import BackToTopComponents from './components/BackToTop'



export default{
    name: 'App',


    components: {
        Navigation, 
        MainComponents,
        PopularComponents,
        // Carousel,
        // CarouselSlide,
        LocationComponents,
        LinkMap,
        FooterComponents, 
        BackToTopComponents,
    },
    

    // data(){
    //   return {
    //       slides: [
    //             'https://picsum.photos/id/230/600/300',
    //             'https://picsum.photos/id/231/600/300',
    //             'https://picsum.photos/id/232/600/300',
    //             'https://picsum.photos/id/233/600/300',
    //             'https://picsum.photos/id/234/600/300',
    //             'https://picsum.photos/id/235/600/300',
    //             'https://picsum.photos/id/236/600/300',
    //         ]
    //     }
    // },
}




</script>

<style>
/* 
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    } */
</style>