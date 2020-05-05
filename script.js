// JS

// gallery

var gallery_container = document.getElementsByClassName("gallery-container");
var gallery_btn = document.getElementsByClassName("gallery-btn");
var hide_gallery = "display: none; opacity: 0;";

for (i=0; i<gallery_btn.length; i++) {
	gallery_btn[i].onclick = function () {
		for (j=0; j<gallery_btn.length; j++) {
			gallery_btn[j].classList.remove("gallery-btn-active");
			gallery_container[j].style.display = "none";
		}
		this.classList.add("gallery-btn-active");
		
		if (this.id === "photography-btn") {
			gallery_container[0].style.display = "flex";
			setTimeout(function(){
				gallery_container[0].style.opacity = 1;
			}, 50);
			gallery_container[1].style.cssText = hide_gallery;
			gallery_container[2].style.cssText = hide_gallery;
			gallery_container[3].style.cssText = hide_gallery;
		} else if (this.id === "svg-btn") {
			gallery_container[0].style.cssText = hide_gallery;
			gallery_container[1].style.display = "flex";
			setTimeout(function(){
				gallery_container[1].style.opacity = 1;
			}, 50);
			gallery_container[2].style.cssText = hide_gallery;
			gallery_container[3].style.cssText = hide_gallery;
		} else if (this.id === "ads-btn") {
			gallery_container[0].style.cssText = hide_gallery;
			gallery_container[1].style.cssText = hide_gallery;
			gallery_container[2].style.display = "flex";
			setTimeout(function(){
				gallery_container[2].style.opacity = 1;
			}, 50);
			gallery_container[3].style.cssText = hide_gallery;
		} else if (this.id === "uxui-btn") {
			gallery_container[0].style.cssText = hide_gallery;
			gallery_container[1].style.cssText = hide_gallery;
			gallery_container[2].style.cssText = hide_gallery;
			gallery_container[3].style.display = "flex";
			setTimeout(function(){
				gallery_container[3].style.opacity = 1;
			}, 50);
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

// gallery images

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

// logo animation

$(function(){
	var animaion = new TimelineMax({paused: false, repeatDelay:0, repeat:0});
	
	function animate (){
	
		var full_logo = $('#full-logo');
		
		var green_outline_outer = $('#green-outline-outer_1_');
		var green_outline_inner = $('#green-outline-inner_1_');
		var white_outline_outer = $('#white-outline-outer_1_');
		var white_outline_inner = $('#white-outline-inner_1_');
		
		var green = $('#green');
		var white = $('#white');
		
		var green_outline_outer_length = {length: 0, pathLength: green_outline_outer[0].getTotalLength()};
		
		function drawGreenOutlineOuter() {
			green_outline_outer[0].style.strokeDasharray = [green_outline_outer_length.length, green_outline_outer_length.pathLength].join(' ');
		};
		
		var green_outline_inner_length = {length: 0, pathLength: green_outline_inner[0].getTotalLength()};
		
		function drawGreenOutlineInner() {
			green_outline_inner[0].style.strokeDasharray = [green_outline_inner_length.length, green_outline_inner_length.pathLength].join(' ');
		};
		
		var white_outline_outer_length = {length: 0, pathLength: white_outline_outer[0].getTotalLength()};
		
		function drawWhiteOutlineOuter() {
			white_outline_outer[0].style.strokeDasharray = [white_outline_outer_length.length, white_outline_outer_length.pathLength].join(' ');
		};
		
		var white_outline_inner_length = {length: 0, pathLength: white_outline_inner[0].getTotalLength()};
		
		function drawWhiteOutlineInner() {
			white_outline_inner[0].style.strokeDasharray = [white_outline_inner_length.length, white_outline_inner_length.pathLength].join(' ');
		};
		
		// draw green outline
		
		animaion.to (green_outline_outer_length, 1, {
			opacity: 1,
			length: green_outline_outer_length.pathLength,
			onUpdate: drawGreenOutlineOuter,
			ease: Power3.ease
		})
		
		.from (green_outline_outer, 0.001, {
			opacity: 0
		}, "-=1")
		
		.to (green_outline_inner_length, 1, {
			opacity: 1,
			length: green_outline_inner_length.pathLength,
			onUpdate: drawGreenOutlineInner,
			ease: Power3.ease
		}, "-=1")
		
		.from (green_outline_inner, 0.001, {
			opacity: 0
		}, "-=1")
		
		// draw white outline
		
		.to (white_outline_outer_length, 1, {
			opacity: 1,
			length: white_outline_outer_length.pathLength,
			onUpdate: drawWhiteOutlineOuter,
			ease: Power3.ease
		}, "-=1")
		
		.from (white_outline_outer, 0.001, {
			opacity: 0
		}, "-=1")
		
		.to (white_outline_inner_length, 1, {
			opacity: 1,
			length: white_outline_inner_length.pathLength,
			onUpdate: drawWhiteOutlineInner,
			ease: Power3.ease
		}, "-=1")
		
		.from (white_outline_inner, 0.001, {
			opacity: 0
		}, "-=1")
		
		// draw fills
		
		.from (green, 1, {
			opacity: 0,
			ease: Power3.ease
		})
		
		.from (white, 1, {
			opacity: 0,
			ease: Power3.ease
		}, "-=1")
		
		// remove outlines
		
		.to (green_outline_outer, 0.5, {
			opacity: 0,
			ease: Power3.ease
		}, "-=0.5")
		
		.to (green_outline_inner, 0.5, {
			opacity: 0,
			ease: Power3.ease
		}, "-=0.5")
		
		.to (white_outline_outer, 0.5, {
			opacity: 0,
			ease: Power3.ease
		}, "-=0.5")
		
		.to (white_outline_inner, 0.5, {
			opacity: 0,
			ease: Power3.ease
		}, "-=0.5")
		
		// full logo rotation
		
		.from (full_logo, 3, {
			opacity: 0,
			rotation: 90,
			transformOrigin: "center",
			ease: Power3.ease
		}, "-=3")
	}
	
	// initialization animation
	function initAnim(){
		animate();
	}
	
	// first initialization
	initAnim();
})












