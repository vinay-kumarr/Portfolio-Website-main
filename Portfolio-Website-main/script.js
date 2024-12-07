let icon=document.querySelector('#icon');
let nav=document.querySelector('.navbar');
icon.onclick=()=>{
    icon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};


let sect=document.querySelectorAll('section');
let navl=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
     let top= window.scrollY;
     let offset= sec.offsetTop - 150;
     let height= sec.offsetHeight;
     let id= sec.getAttribute('id');
     if(top>=offset && top< offset+height){
        navl.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
     };
    });

   let head=document.querySelector('header');
   head.classList.toggle('sticky',window.scrollY >100);
   icon.classList.remove('bx-x');
    nav.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.content, .heading', { origin:'top'});
 ScrollReveal().reveal('.pic, .scontainer, .Pbox, .contact form', { origin:'bottom'});

 ScrollReveal().reveal('.content h1, .head', { origin:'left'});
 ScrollReveal().reveal('.content p, .infocontent', { origin:'right'});

const typed=new Typed ('.text',{
    strings:['Frontend Developer','programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});




