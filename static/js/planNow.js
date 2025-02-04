// function sendMessage() {
//     const selectedCategory = document.querySelector('input[name="occasion"]:checked').value;
//     const fullName = document.getElementById("fullName").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (!fullName || !subject || !message || !selectedCategory) {
//         alert("Please fill out all fields and select a category.");
//         return;
//     }

//     const whatsappMessage = `Category: ${selectedCategory}\nName: ${fullName}\nSubject: ${subject}\nMessage: ${message}`;
//     const phoneNumber = document.getElementById("sendmessageBtn").getAttribute("number");
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

//     window.open(whatsappURL, "_blank");
// }
// function selectCategory(category) {
//     document.getElementById("selectedCategory").value = category;
//     const boxes = document.querySelectorAll(".occasion-box");
//     boxes.forEach((box) => box.classList.remove("selected"));
//     event.target.closest(".occasion-box").classList.add("selected");
// }

function selectCategory(category) {
    document.getElementById("selectedCategory").value = category;
    const boxes = document.querySelectorAll(".occasion-box");
    
    // Remove selected class from all boxes
    boxes.forEach((box) => box.classList.remove("selected"));

    // Add selected class to the clicked box
    event.target.closest(".occasion-box").classList.add("selected");
}


function sendMessage() {
    const userName = document.getElementById("userName").value.trim();
    const selectedCategory = document.getElementById("selectedCategory").value.trim();

    if (!userName || !selectedCategory) {
        alert("Please fill in your name and select a category.");
        return;
    }

    const message = `Hello, my name is ${userName}, and I’m planning a ${selectedCategory} event. Could you assist me?`;
    const phoneNumber = document.getElementById("sendMessageBtn").getAttribute("number");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
}
