<template>
  <div id="app">
    <div id="nav">
      <div class="nav-logo" >
        <img src="@/assets/Noolim-logo.png">
      </div>
      <router-link to="/">홈</router-link> 
      <router-link to="/about">상세 검색</router-link>  
      <router-link to="/Location">지도 검색</router-link> 
      <router-link to="/Contact">고객센터</router-link> 
      <router-link to="/join">로그인</router-link> 
    </div>

      <router-view />


    <div id ="footer">
    <div class="rela-block footer-section">
    
    <div class="rela-block social-buttons-container">
        <div class="social-button facebook-button"></div>
        <div class="social-button twitter-button"></div>
        <div class="social-button instagram-button"></div>
        <div class="social-button behance-button"></div>
    </div>
    <p>Classic deluxe custom designer luxury prestige high-quality premium select gourmet pocket pencil sharpener.<br>
        Yours for the asking, no purchase necessary. It's our way of saying thank you.</p>
      </div>
    </div>
  </div>

</template>

<script>



export default {

  component: {

  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

*{
	margin: 0;
	padding: 0;
	border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 10px 0;
  background-color: #7bc4c4;
  z-index: 99;

  color: #fff;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  position: fixed;

}

#nav{
  flex-direction: row;
  transition: .5s ease all;
  width: 100%;
  margin: 0 auto;
}


#nav a {
  position: relative;
  font-weight: 500;
  color: rgb(97, 97, 97);
  text-decoration: none;
  font-size: 15px;

  padding: 10px 0;
  transition: .5s ease all;
  margin: 10px;
  right: 30px;
  

}

#nav a.router-link-exact-active {
  color: #ffffff;

}

.nav-logo{
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  letter-spacing: 0px;
  color: #fff;
  transition: 0.4s ease;
  cursor: pointer;
}

.nav-logo img{
  width: 250px;
  height: 150px;
  left: 10px;
  cursor: pointer;
}

/* -------------FOOTER ---------------- */



.footer-section p{
    text-align: center;
    font-family: 'Nanum Gothic', sans-serif;
} 
.footer-section {
  padding: 65px 0;
  background: #7bc4c4;
  color: #fff;
}
.footer-section .small-header {
  margin-bottom: 20px;
}
.footer-section .top-link {
  cursor: pointer;
}
.social-buttons-container {
  min-height: 100px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 20px;
  text-align: center;
}
.social-button {
  display: inline-block;
  position: relative;
  transform: scale(0.75);
  height: 75px;
  width: 75px;
  background-size: cover !important;
  transition: 0.3s ease;
  margin: 14px 2px;
  cursor: pointer;
}
.social-button:hover {
  transform: scale(1);
  transition: 0.3s cubic-bezier(0.3, 0.2, 0, 2.5);
}
.social-button.twitter-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/twitter-square-social-media-256.png") no-repeat center;
}
.social-button.facebook-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/facebook-square-social-media-256.png") no-repeat center;
}
.social-button.instagram-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/instagram-square-social-media-256.png") no-repeat center;
}
.social-button.behance-button {
  background: url("https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/behance-square-social-media-256.png") no-repeat center;
}


</style>
