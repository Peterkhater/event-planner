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