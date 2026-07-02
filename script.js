/* ===========================================
        LOADING SCREEN
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});


/* ===========================================
        TYPING EFFECT
=========================================== */

const words = [

    "Python Developer",

    "Data Analyst",

    "Machine Learning Enthusiast",

    "Information Technology Graduate",

    "Business Analyst Aspirant"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


/* ===========================================
        MOBILE NAVIGATION
=========================================== */

const menu = document.querySelector(".menu");

const navLinks = document.querySelector(".navbar ul");

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("show");

});


/* ===========================================
        SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        navLinks.classList.remove("show");

    });

});


/* ===========================================
        STICKY NAVBAR
=========================================== */

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});


/* ===========================================
        ACTIVE MENU
=========================================== */

const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    nav.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/* ===========================================
        SCROLL REVEAL
=========================================== */

const reveals=document.querySelectorAll("section");

function reveal(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const height=window.innerHeight;

        if(top<height-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/* ===========================================
        COUNTER ANIMATION
=========================================== */

const counters=document.querySelectorAll(".counter");

const speed=200;

const startCounter=()=>{

    counters.forEach(counter=>{

        const update=()=>{

            const target=+counter.dataset.target;

            const count=+counter.innerText;

            const inc=target/speed;

            if(count<target){

                counter.innerText=Math.ceil(count+inc);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        };

        update();

    });

};


/* ===========================================
        START COUNTER
=========================================== */

let counterStarted=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector("#about");

    if(!stats) return;

    if(window.scrollY>stats.offsetTop-400 && !counterStarted){

        counterStarted=true;

        startCounter();

    }

});


/* ===========================================
        PROFILE FLOATING
=========================================== */

const profile=document.querySelector(".profile-card");

if(profile){

setInterval(()=>{

profile.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1

});

},3000);

}


/* ===========================================
        BACK TO TOP BUTTON
=========================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ===========================================
        PARALLAX HERO
=========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector("#home");

    if(hero){

        hero.style.backgroundPositionY=window.scrollY*0.5+"px";

    }

});


/* ===========================================
        MOUSE GLOW
=========================================== */

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/* ===========================================
        PROJECT CARD HOVER
=========================================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});


/* ===========================================
        END
=========================================== */