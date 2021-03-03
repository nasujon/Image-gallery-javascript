

const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//Set first image opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e){

    //reset opacity
    img.forEach(img => img.style.opacity = 1);

    //Current img src change
    current.src = e.target.src;

    //Add fade-in class
    current.classList.add('fade-in');

    //Remove fade-in after 0.5s
    setTimeout(() => current.classList.remove('fade-in'),500);

    //Change Opacity to Opacity var
    e.target.style.opacity = opacity; 
}