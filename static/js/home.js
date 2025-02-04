document.addEventListener("DOMContentLoaded", function () {
    function startCounterAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.getAttribute("data-target"));
                let duration = 2000; // Animation duration (ms)
                let stepTime = 10; // Time between increments (ms)
                let current = 0;
                let increment = target / (duration / stepTime);

                let interval = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(interval);
                    }
                    counter.textContent = Math.floor(current) + "+";
                }, stepTime);

                observer.unobserve(counter); // Stop observing after animation
            }
        });
    }

    let observer = new IntersectionObserver(startCounterAnimation, {
        root: null, // Observe in the viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    document.querySelectorAll(".counter").forEach(counter => {
        observer.observe(counter);
    });
});


var i = 0;
    let slides = document.querySelectorAll(".slide1");
    let slider = document.querySelector(".slider");
    var pause = false;
    function moveRight() {
      slides[i].className = "slide1";
      i = (i + 1) % slides.length;
      slides[i].className = "slide1 active";
      let Xvalue = -160 * i;
      slider.style.transform = `translateX(${Xvalue}px)`;
    }
    function moveLeft() {
      slides[i].className = "slide1";
      i = (i - 1 + slides.length) % slides.length;
      slides[i].className = "slide1 active";
      let Xvalue = -160 * i;
      slider.style.transform = `translateX(${Xvalue}px)`;
    }

    const interval = setInterval(() => {
      if (!pause) {
        moveRight();
      }
    }, 3000);

    function playPause() {
      let state = document.querySelector(".icon");
      if (state.innerHTML == "pause") {
        state.innerHTML = "play_arrow";
        pause = true;
      } else {
        state.innerHTML = "pause";
        pause = false;
      }
    }


    

    function sendMessage() {
      // Get form values
      const fullName = document.getElementById("fullName").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Check if all fields are filled
      if (!fullName || !subject || !message) {
        alert("Fill all the Blanks");
        return;
      }
  
      // Format the WhatsApp message
      const whatsappMessage = `Name & Last Name: ${fullName}\nSubject: ${subject}\nMessage: ${message}`;
  
  
      const phoneNumbers = document.getElementById("sendmessageBtn");
      const phoneNumber = phoneNumbers.getAttribute("number")
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
      // Open WhatsApp URL in a new tab
      window.open(whatsappURL, "_blank");
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



    // function sendMessage() {
    //   // Get form values
    //   const fullName = document.getElementById("fullName").value.trim();
    //   const subject = document.getElementById("subject").value.trim();
    //   const message = document.getElementById("message").value.trim();
  
    //   // Check if all fields are filled
    //   if (!fullName || !subject || !message) {
    //     alert("You should fill all Inputs");
    //     return;
    //   }
  
    //   // Format the WhatsApp message
    //   const whatsappMessage = `Nom et prénom: ${fullName}\nSujet: ${subject}\nMessage: ${message}`;
  
  
    //   const phoneNumbers = document.getElementById("sendmessageBtn");
    //   const phoneNumber = phoneNumbers.getAttribute("number")
    //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
    //   // Open WhatsApp URL in a new tab
    //   window.open(whatsappURL, "_blank");
    // }
  


  //   document.addEventListener("DOMContentLoaded", function () {
  //     const canvas = document.getElementById("balloonCanvas");
  //     const ctx = canvas.getContext("2d");
  
  //     // Resize the canvas to fit the screen
  //     function resizeCanvas() {
  //         canvas.width = window.innerWidth;
  //         canvas.height = window.innerHeight;
  //     }
  //     window.addEventListener("resize", resizeCanvas);
  //     resizeCanvas();
  
  //     class Balloon {
  //         constructor() {
  //             this.x = Math.random() * canvas.width;
  //             this.y = canvas.height + Math.random() * 100; // Start below the screen
  //             this.speed = Math.random() * 2 + 1; // Speed variation
  //             this.radius = Math.random() * 20 + 10;
  //             this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  //         }
  
  //         draw() {
  //             ctx.beginPath();
  //             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //             ctx.fillStyle = this.color;
  //             ctx.fill();
  //         }
  
  //         update() {
  //             this.y -= this.speed; // Move up
  //             if (this.y < -50) {
  //                 this.y = canvas.height + 50;
  //                 this.x = Math.random() * canvas.width;
  //             }
  //             this.draw();
  //         }
  //     }
  
  //     const balloons = [];
  //     for (let i = 0; i < 15; i++) {
  //         balloons.push(new Balloon());
  //     }
  
  //     function animate() {
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);
  //         balloons.forEach((balloon) => balloon.update());
  //         requestAnimationFrame(animate);
  //     }
  
  //     animate();
  // });
  
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const canvas = document.getElementById("balloonCanvas");
//     const ctx = canvas.getContext("2d");

//     function resizeCanvas() {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     }
//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     class Balloon {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = canvas.height + Math.random() * 100;
//             this.speed = Math.random() * 2 + 1;
//             this.radius = Math.random() * 20 + 15;
//             this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
//         }

//         draw() {
//             ctx.beginPath();
//             ctx.ellipse(this.x, this.y, this.radius * 0.8, this.radius, 0, 0, Math.PI * 2);
//             ctx.fillStyle = this.color;
//             ctx.fill();

//             // Glossy effect
//             ctx.beginPath();
//             ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.2, 0, Math.PI * 2);
//             ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//             ctx.fill();

//             // Balloon string
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y + this.radius);
//             ctx.lineTo(this.x, this.y + this.radius + 40);
//             ctx.strokeStyle = "black";
//             ctx.lineWidth = 2;
//             ctx.stroke();
//         }

//         update() {
//             this.y -= this.speed;
//             this.x += Math.sin(this.y * 0.05) * 0.5; // Wiggle effect

//             if (this.y < -50) {
//                 this.y = canvas.height + 50;
//                 this.x = Math.random() * canvas.width;
//             }
//             this.draw();
//         }
//     }

//     const balloons = [];
//     for (let i = 0; i < 20; i++) {
//         balloons.push(new Balloon());
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         balloons.forEach((balloon) => balloon.update());
//         requestAnimationFrame(animate);
//     }

//     animate();
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("balloonCanvas");
//   const ctx = canvas.getContext("2d");

//   function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//   }
//   window.addEventListener("resize", resizeCanvas);
//   resizeCanvas();

//   class Balloon {
//       constructor() {
//           this.x = Math.random() * canvas.width;
//           this.y = canvas.height + Math.random() * 100;
//           this.speed = Math.random() * 2 + 1;
//           this.radius = Math.random() * 20 + 30; // Bigger balloons for a realistic look
//           this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
//       }

//       draw() {
//           // Draw balloon (oval-shaped)
//           ctx.beginPath();
//           ctx.ellipse(this.x, this.y, this.radius * 0.8, this.radius, 0, 0, Math.PI * 2);
//           ctx.fillStyle = this.color;
//           ctx.fill();

//           // Add glossy effect to make it shiny
//           ctx.beginPath();
//           ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.2, 0, Math.PI * 2);
//           ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//           ctx.fill();

//           // Balloon string (make it curved and lighter)
//           ctx.beginPath();
//           ctx.moveTo(this.x, this.y + this.radius);
//           ctx.quadraticCurveTo(this.x + Math.random() * 10, this.y + this.radius + 10, this.x, this.y + this.radius + 40); // Curved string
//           ctx.strokeStyle = "rgba(200, 200, 200, 0.6)"; // Lighter color
//           ctx.lineWidth = 2;
//           ctx.stroke();
//       }

//       update() {
//           this.y -= this.speed;
//           this.x += Math.sin(this.y * 0.05) * 1.5; // Slight movement left and right

//           // If balloon goes off-screen, reset its position
//           if (this.y < -50) {
//               this.y = canvas.height + 50;
//               this.x = Math.random() * canvas.width;
//           }
//           this.draw();
//       }
//   }

//   const balloons = [];
//   for (let i = 0; i < 10; i++) { // Reduced number of balloons for less crowding
//       balloons.push(new Balloon());
//   }

//   function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas each frame
//       balloons.forEach((balloon) => balloon.update());
//       requestAnimationFrame(animate);
//   }

//   animate();
// });









// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("balloonCanvas");
//   const ctx = canvas.getContext("2d");

//   function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//   }
//   window.addEventListener("resize", resizeCanvas);
//   resizeCanvas();

//   class Balloon {
//       constructor() {
//           this.x = Math.random() * canvas.width;
//           this.y = canvas.height + Math.random() * 100;
//           this.speed = Math.random() * 1.5 + 0.5; // Slower for realism
//           this.radius = Math.random() * 25 + 30; // Larger balloons
//           this.color = `hsl(${Math.random() * 360}, 80%, 60%)`; // Softer colors
//           this.knotOffset = (Math.random() - 0.5) * 8; // Randomize knot position
//       }

//       draw() {
//           // Draw balloon (oval shape)
//           ctx.beginPath();
//           ctx.ellipse(this.x, this.y, this.radius * 0.8, this.radius, 0, 0, Math.PI * 2);
//           ctx.fillStyle = this.color;
//           ctx.fill();

//           // Glossy effect
//           ctx.beginPath();
//           ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.4, this.radius * 0.2, 0, Math.PI * 2);
//           ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
//           ctx.fill();

//           // Draw knot
//           ctx.beginPath();
//           ctx.moveTo(this.x + this.knotOffset, this.y + this.radius - 5);
//           ctx.lineTo(this.x + this.knotOffset - 5, this.y + this.radius + 5);
//           ctx.lineTo(this.x + this.knotOffset + 5, this.y + this.radius + 5);
//           ctx.closePath();
//           ctx.fillStyle = this.color; // Use same color as balloon
//           ctx.fill();

//           // Draw balloon string
//           ctx.beginPath();
//           ctx.moveTo(this.x + this.knotOffset, this.y + this.radius + 5);
//           ctx.lineTo(this.x + this.knotOffset + Math.sin(this.y * 0.03) * 10, this.y + this.radius + 50);
//           ctx.strokeStyle = "gray"; // Lighter string color
//           ctx.lineWidth = 1.5;
//           ctx.stroke();
//       }

//       update() {
//           this.y -= this.speed;
//           this.x += Math.sin(this.y * 0.05) * 0.4; // Wiggle effect

//           if (this.y < -50) {
//               this.y = canvas.height + 50;
//               this.x = Math.random() * canvas.width;
//           }
//           this.draw();
//       }
//   }

//   const balloons = [];
//   for (let i = 0; i < 10; i++) { // Reduced balloon count
//       balloons.push(new Balloon());
//   }

//   function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       balloons.forEach((balloon) => balloon.update());
//       requestAnimationFrame(animate);
//   }

//   animate();
// });


document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("balloonCanvas");
  const ctx = canvas.getContext("2d");
  const toggleButton = document.getElementById("toggleButton");

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Balloon {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + Math.random() * 100;
          this.speed = Math.random() * 1.5 + 0.5;
          this.radius = Math.random() * 25 + 30;
          this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
          this.knotOffset = (Math.random() - 0.5) * 8;
      }

      draw() {
          ctx.beginPath();
          ctx.ellipse(this.x, this.y, this.radius * 0.8, this.radius, 0, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.4, this.radius * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(this.x + this.knotOffset, this.y + this.radius - 5);
          ctx.lineTo(this.x + this.knotOffset - 5, this.y + this.radius + 5);
          ctx.lineTo(this.x + this.knotOffset + 5, this.y + this.radius + 5);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(this.x + this.knotOffset, this.y + this.radius + 5);
          ctx.lineTo(this.x + this.knotOffset + Math.sin(this.y * 0.03) * 10, this.y + this.radius + 50);
          ctx.strokeStyle = "gray";
          ctx.lineWidth = 1.5;
          ctx.stroke();
      }

      update() {
          this.y -= this.speed;
          this.x += Math.sin(this.y * 0.05) * 0.4;

          if (this.y < -50) {
              this.y = canvas.height + 50;
              this.x = Math.random() * canvas.width;
          }
          this.draw();
      }
  }

  const balloons = [];
  for (let i = 0; i < 5; i++) {
      balloons.push(new Balloon());
  }

  let animationRunning = true;
  function animate() {
      if (animationRunning) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          balloons.forEach(balloon => balloon.update());
          requestAnimationFrame(animate);
      }
  }

  animate();

  toggleButton.addEventListener("click", function () {
      animationRunning = !animationRunning;
      toggleButton.textContent = animationRunning ? "Turn Off Balloons" : "Turn On Balloons";

      if (animationRunning) {
          animate();
      } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
  });
});



// document.getElementById('startAudioButton').onclick = function() {
//   var audio = document.getElementById('backgroundAudio');
//   audio.play();
// };
