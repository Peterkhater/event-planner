// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});





// document.addEventListener("DOMContentLoaded", () => {
//     const preloader = document.querySelector('.pl');
//     const navContainer = document.querySelector('.navbar-mainbg');
//     const mainContentContainer = document.querySelector('.allContent');

//     // Hide nav and content while loading
//     navContainer.style.opacity = '0';
//     mainContentContainer.style.opacity = '0';

//     window.addEventListener('load', () => {

//         preloader.style.transition = 'opacity 0.5s ease';
//         preloader.style.opacity = '0';


//         navContainer.style.transition = 'opacity 0.5s ease';
//         mainContentContainer.style.transition = 'opacity 0.5s ease';

//         navContainer.style.opacity = '1';
//         mainContentContainer.style.opacity = '1';

//         setTimeout(() => {
//             preloader.style.display = 'none'; // Hide preloader after fade-out
//         }, 500); // Duration matches the fade-out transition
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector(".pl").style.display = "none";  
    }, 2000); 
});


const getCurrentYear=()=>{
	const date = new Date()
	thisyear = date.getFullYear()
	return thisyear
}

window.onload=function(){
	toYear = document.getElementById('toYear').textContent=`-> ${getCurrentYear()} All Rights Reserved by Peter khater`
}

ScrollReveal().reveal('.goingup', {
	duration: 500,
	delay: 100,
	distance: '50px',
	origin: 'bottom',
	opacity: 0,
	easing: 'ease-in-out',
	interval: 200,
	reset: true
  });

  const canvas = document.getElementById("balloonCanvas");
  const ctx = canvas.getContext("2d");
  
  function resizeCanvas() {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
  }
  
//   window.addEventListener("resize", resizeCanvas);
//   resizeCanvas(); // Initial call
  
//   class Balloon {
// 	  constructor() {
// 		  this.x = Math.random() * canvas.width;
// 		  this.y = canvas.height + Math.random() * 200;
// 		  this.speed = Math.random() * 2 + 1;
// 		  this.radius = Math.random() * 20 + 15; // Balloon size
// 		  this.color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random colors
// 	  }
  
// 	  draw() {
// 		  ctx.beginPath();
// 		  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
// 		  ctx.fillStyle = this.color;
// 		  ctx.fill();
// 		  ctx.closePath();
// 	  }
  
// 	  update() {
// 		  this.y -= this.speed;
// 		  if (this.y < -50) {
// 			  this.y = canvas.height + 50; // Reset to bottom when reaching top
// 			  this.x = Math.random() * canvas.width;
// 		  }
// 		  this.draw();
// 	  }
//   }
  
//   const balloons = [];
//   for (let i = 0; i < 15; i++) {
// 	  balloons.push(new Balloon());
//   }
  
//   function animate() {
// 	  ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	  balloons.forEach(balloon => balloon.update());
// 	  requestAnimationFrame(animate);
//   }
  
//   animate();

document.getElementById('startAudioButton').onclick = function() {
	var audio = document.getElementById('backgroundAudio');
	audio.play();
  };