

const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');


imgs.addEventListener('click', (e)=>{
   
    current.src = e.target.src;
})