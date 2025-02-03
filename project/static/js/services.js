const downloadImg=(imgUrl)=>{
    console.log(imgUrl)
    fetch(imgUrl).then(res => res.blob()).then(file=>{
        const a = document.createElement('a');
        a.href= URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click()
    }).catch(()=> alert("failed to download the image"))
}

const lightBox = document.querySelector('.lightbox');

const showLightBox=(name, img)=>{
    lightBox.querySelector("img").src=img;
    lightBox.querySelector("span").textContent=name;
    downloadImgBtn.setAttribute("data-img", img)
    lightBox.classList.add('show');
    document.body.style.overflow='hidden'
}
const hideLightBox=()=>{
    lightBox.classList.remove('show');
    document.body.style.overflow='auto'
}

const closeBtn = lightBox.querySelector('.fa-x')
const downloadImgBtn = lightBox.querySelector('.fa-download')

closeBtn.addEventListener('click', hideLightBox);

downloadImgBtn.addEventListener('click',(e)=>downloadImg(e.target.dataset.img))

// ScrollReveal().reveal('.goingup', {
//     duration: 300,
//     delay: 50,
//     distance: '50px',
//     origin: 'bottom',
//     opacity: 0,
//     easing: 'ease-in-out',
//     interval: 100,
//     // reset: true
//   });

// ScrollReveal().reveal('.goingup', {
//     distance: '50px', // Moves the element 50px from its original position
//     origin: 'bottom', // Animation starts from the bottom
//     opacity: 0,       // Fades in from transparent
//     duration: 800,    // Animation lasts 800ms
//     delay: 200,       // Delay for each item
//     easing: 'ease-out', // Smooth exit animation
//     interval: 200     // Staggering effect for multiple items
//   });
  


const elements = document.querySelectorAll('.goingup');

elements.forEach((element, index) => {
  const rowIndex = Math.floor(index / 3);
  const delay = rowIndex * 100;
  ScrollReveal().reveal(element, {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 500,
    delay: delay, // Set delay based on row index
    easing: 'ease-out',
    // reset:true
  });
});
