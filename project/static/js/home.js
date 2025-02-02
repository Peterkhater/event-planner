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
        alert("Veuillez remplir tous les champs.");
        return;
      }
  
      // Format the WhatsApp message
      const whatsappMessage = `Nom et prénom: ${fullName}\nSujet: ${subject}\nMessage: ${message}`;
  
  
      const phoneNumbers = document.getElementById("sendmessageBtn");
      const phoneNumber = phoneNumbers.getAttribute("number")
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
      // Open WhatsApp URL in a new tab
      window.open(whatsappURL, "_blank");
    }