let menu =document.querySelector('#menu-btn');
 navbarLinks = document.querySelector('.header .navbar .links');


menu.onclick = () =>{
  navbarLinks.classList.toggle('active');
    times();
    menu.classList.toggle('active')
}

let icon = "fas fa-times";
let menuicon= "fa fa-bars";

function times(){
    if(navbarLinks.classList.contains('active')){
        menu.innerHTML=`<i class="${icon}"></i>`;
    }
    else{
        menu.innerHTML=`<i class="${menuicon}"></i>` 
    }
}

window.onscroll = () =>{
    navbarLinks.classList.remove('active');
      menu.classList.remove('active');
      times();

      if(window.scrollY > 60){
       document.querySelector('.header .navbar').classList.add('active');
      }
      else{
        document.querySelector('.header .navbar').classList.remove('active');
      }
  }



