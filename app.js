// hero section text animations

const splitHeading = new SplitText(".hero-text h1", {
  types: "words",
});
const splitPara = new SplitText(".hero-text p", {
  types: "lines, words, chars",
});

gsap.from(splitHeading.words, {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.08,
});

gsap.from(splitPara.lines, {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.25,
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

var buttons = document.querySelector('button');

buttons.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        backgroundColor: 'white',
    })
});
buttons.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        backgroundColor: 'black',
    })
});

// logo cursor animation

var logo = document.querySelector('.logo');

logo.addEventListener('mouseenter', function(){
    gsap.to(cursor,{
        backgroundColor : 'transparent',
    })
});
logo.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        backgroundColor: 'black',
    })
});