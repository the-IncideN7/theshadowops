// JS

// gallery

var gallery_container = document.getElementsByClassName("gallery-container");
var gallery_btn = document.getElementsByClassName("gallery-btn");

// optimize this code

for (i=0; i<gallery_btn.length; i++) {
	gallery_btn[i].onclick = function () {
		for (j=0; j<gallery_btn.length; j++) {
			gallery_btn[j].classList.remove("gallery-btn-active");
			gallery_container[j].style.display = "none";
		}
		this.classList.add("gallery-btn-active");
		
		if (this.id === "photography-btn") {
			gallery_container[0].style.display = "flex";
			gallery_container[1].style.display = "none";
			gallery_container[2].style.display = "none";
			gallery_container[3].style.display = "none";
		} else if (this.id === "svg-btn") {
			gallery_container[0].style.display = "none";
			gallery_container[1].style.display = "flex";
			setTimeout(function(){
				gallery_container[1].style.opacity = 1;
			}, 50);
			gallery_container[2].style.display = "none";
			gallery_container[3].style.display = "none";
		} else if (this.id === "ads-btn") {
			gallery_container[0].style.display = "none";
			gallery_container[1].style.display = "none";
			gallery_container[2].style.display = "flex";
			gallery_container[3].style.display = "none";
		} else if (this.id === "uxui-btn") {
			gallery_container[0].style.display = "none";
			gallery_container[1].style.display = "none";
			gallery_container[2].style.display = "none";
			gallery_container[3].style.display = "flex";
		}
	}
}

// modal

var gallery_images = document.getElementsByClassName("gallery-image");
var modal = document.getElementsByClassName("modal")[0];
var modal_close = document.getElementsByClassName("modal-close-btn")[0];
var modal_before = document.getElementsByClassName("modal-before-btn")[0];
var modal_after = document.getElementsByClassName("modal-after-btn")[0];
var modal_image_before = document.getElementsByClassName("modal-image-before")[0];
var modal_image_after = document.getElementsByClassName("modal-image-after")[0];

var images = [
	// photography
	["Gallery/Fb-1.jpg", "Gallery/Fb-1_before.jpg"],
	["Gallery/STG_1064.jpg", "Gallery/STG_1064_2.jpg"],
	["Gallery/Fb-1.jpg", "Gallery/Fb-1_before.jpg"],
	["Gallery/STG_1064.jpg", "Gallery/STG_1064_2.jpg"],
	["Gallery/Fb-1.jpg", "Gallery/Fb-1_before.jpg"],
	["Gallery/STG_1064.jpg", "Gallery/STG_1064_2.jpg"],
	
	// svg
	
	["Gallery/Fb-1.jpg"],
	
	//ads
	
	//uxui
	
];

for (let i=0; i<gallery_images.length; i++) {
	gallery_images[i].onclick = function () {
		
		modal.style.display = "block";
		
		if(i<= 5) {
		
		// photography with before and after
		
			modal_image_after.src = images[i][0];
			modal_image_before.src = images[i][1];
			
			modal_before.style.display = "block";
			
			setTimeout(function(){
				modal_image_after.style.opacity = 1;
			}, 50)
	
			modal_close.onclick = function () {
				modal_image_before.style.opacity = 0;
				modal_image_after.style.opacity = 0;
				modal_before.style.display = "block";
				modal_after.style.display = "none";
				setTimeout(function(){
					modal.style.display = "none";
				}, 500)
			}
			
			modal_before.onclick = function () {
				modal_after.style.display = "block";
				modal_before.style.display = "none";
				modal_image_before.style.opacity = 1;
			}
			
			modal_after.onclick = function () {
				modal_after.style.display = "none";
				modal_before.style.display = "block";
				modal_image_before.style.opacity = 0;
			}
		} else {
			
			// all other without before and after
			
			modal_before.style.display = "none";
			modal_after.style.display = "none";
			
			modal_image_after.src = images[i][0];
			
			setTimeout(function(){
				modal_image_after.style.opacity = 1;
			}, 50)
	
			modal_close.onclick = function () {
				modal_image_after.style.opacity = 0;
				modal_after.style.display = "none";
				setTimeout(function(){
					modal.style.display = "none";
				}, 500)
			}
		}
	}
}



// test

var temp = document.getElementById("website-logo");

var csst = "width: 100px; opacity: 0.5;";

// temp.style.cssText = "width: 100px; opacity: 0.5;";
temp.style.cssText = csst;












