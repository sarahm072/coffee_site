let search= document.querySelector('.search-box');
document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};
