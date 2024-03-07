let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick=() =>{
 menuIcon.classList.toggle('fa-xmark');
 navbar.classList.toggle('active')
}

const typed = new Typed('.multiple-text',{
    strings: ['Naturopathist','Vastu Expert','Yoga Therapatic Consultant','Counsellor','Numerology Expert','Acupuncture Expert','Accupressure Expert'],
    typeSpeed: 50,
    backSpeed:30,
    backDelay:3000,
    loop:true
})

let dnone = document.querySelector("#toshow");
let btnMore = document.querySelector("#btnmore");
let i = 0 
btnMore.onclick = () =>{
    dnone.classList.toggle("show");
    i++;
    if(i%2 == 1){
    btnMore.innerText = "Read Less";
    }
    else{
        
    btnMore.innerText = "Read More";
    }
}