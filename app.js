// hero section text animations

const splitHeading = new SplitText(".hero-text h1 span", {
  types: "words",
});
const splitPara = new SplitText(".hero-text p", {
  types: "lines, words, chars",
});
var splitNav = new SplitText('.nav-links ul li',{
  types : "words"
})

gsap.from(splitNav.words,{
  y : 40,
  opacity: 1,
  duration : 0.7,
  stagger: 0.10,
})

gsap.from(splitHeading.words, {
  y: 80,
  opacity : 1,
  duration: 1.6,
  ease: "power4.out",
  stagger: 0.10,
});

gsap.from(splitPara.lines, {
  y: 80,
  opacity: 1,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.20,
});

// custom cursor animation

const body = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
var heroVideo = document.querySelector(".hero-vid");

body.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    ease: "power4.out",
  });
});
heroVideo.addEventListener("mouseenter", function () {
  cursor.innerHTML = "Play Reel";
  gsap.to(cursor, {
    scale: 10,
    backgroundColor: "white",
  });
});
heroVideo.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "black",
  });
});

// second section text animation

var splitPara2 = new SplitText(".sec-text p", {
  types: "lines, words, chars",
});
gsap.from(splitPara2.lines, {
  y: 50,
  opacity: 0,
  duration: 0.7,
  ease: "power4.out",
  stagger: 0.06,
  scrollTrigger: {
    scroller: "body",
    trigger: ".second",
    start: "top 28%",
    end: "top 27%",
  },
  scrub: 4,
});

// button cursor animation

var buttons = document.querySelector('.button');

buttons.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        filter : 'invert(1)',
        scale : 2,
    })
});
buttons.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        filter : 'invert(0)',
        scale : 1,
    })
});

// service section animations

var service = document.querySelector('.services');

service.addEventListener('mouseenter', function(){
  gsap.to(cursor,{
    filter : 'invert(1)'
  })
})
service.addEventListener('mouseleave', function(){
  gsap.to(cursor,{
    filter : 'invert(0)'
  })
})

function ServiceHeadingAnim(){
 var splitHeading2 = new SplitText('.service-head h1',{
  types : 'words'
});

gsap.from(splitHeading2.words,{
  y : 90,
  duration : 0.8,
  stagger : 0.12,
  scrollTrigger : {
    // markers : true,
    scroller : 'body',
    trigger : '.service-head h1',
    start : 'top 80%',
    end : 'top 79%',
  },
  scrub : 3,
})
}
ServiceHeadingAnim();

function SeviceParaAnim(){
  var splitPara3 = new SplitText('.service-head p',{
    types : 'lines'
  })
  gsap.from(splitPara3.lines,{
    y: 40,
    stagger : 0.2,
    duration : 0.8,
    scrollTrigger : {
    // markers : true,
    scroller : 'body',
    trigger : '.service-head h1',
    start : 'top 80%',
    end : 'top 79%',
  },
  scrub : 3,
  })
}
SeviceParaAnim()
// function toggleMenu() {
//       document.getElementById("sideMenu").classList.toggle("active");
// }{
gsap.to(".round", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 12,
      ease: "linear"
    });