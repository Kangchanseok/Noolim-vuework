var koreasvg = document.getElementById("Korea-svg"),
	provinceInfo = document.getElementById("provinceInfo"),
	allProvinces = koreasvg.querySelectorAll("g");
	

	koreasvg.addEventListener("mouseover", function(e){ 
		var province = e.target.parentNode;
		if(e.target.nodeName == "path") {
		for (var i=0; i < allProvinces.length; i++) {
			allProvinces[i].classList.remove("active");
		}
		province.classList.add("active");
		//? 구이름
		var provinceName = province.querySelector("title").innerHTML,
		provincePara = province.querySelector("desc p");
		//? 이미지 파일 아무거나 가져와서 imgPath에 경로 넣기
		sourceImg = province.querySelector("img"),
		//? imgpath 폴더경로
		imgPath = "/img";
		// imgPath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/";
		provinceInfo.innerHTML = "";
		provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+"><h1>"+provinceName+"</h1>");
		provinceInfo.classList.add("show");
		}
	})

 //* 클릭시 이동  -> 수정 하기 
	// koreasvg.addEventListener("click", function(e){ 
	// 	location.href="/loc/map.html";
		
	// });


//* 클릭이벤트가 들어오면 <g id="도봉구">에서 id값을 받고 확인 후 넘겨줌!
koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("도봉구");
	if (justtest['id'] == "도봉구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("동대문구");
	if (justtest['id'] == "동대문구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("동작구");
	if (justtest['id'] == "동작구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("은평구");
	if (justtest['id'] == "은평구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("강북구");
	if (justtest['id'] == "강북구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("강동구");
	if (justtest['id'] == "강동구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("강서구");
	if (justtest['id'] == "강서구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("금천구");
	if (justtest['id'] == "금천구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("구로구");
	if (justtest['id'] == "구로구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("관악구");
	if (justtest['id'] == "관악구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("광진구");
	if (justtest['id'] == "광진구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("강남구");
	if (justtest['id'] == "강남구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("종로구");
	if (justtest['id'] == "종로구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("중구");
	if (justtest['id'] == "중구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("중랑구");
	if (justtest['id'] == "중랑구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });


 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("마포구");
	if (justtest['id'] == "마포구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("노원구");
	if (justtest['id'] == "노원구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("서초구");
	if (justtest['id'] == "서초구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("서대문구");
	if (justtest['id'] == "서대문구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("성북구");
	if (justtest['id'] == "성북구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("성동구");
	if (justtest['id'] == "성동구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("송파구");
	if (justtest['id'] == "송파구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("");
	if (justtest['id'] == "양천구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("영등포구");
	if (justtest['id'] == "영등포구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });

 koreasvg.addEventListener("click", function(e){
	justtest = document.getElementsByClassName("active");
	justtest = justtest.namedItem("용산구");
	if (justtest['id'] == "용산구") {
	   location.href="/loc/map.html";
	}
	console.log(justtest['id']);
 });
