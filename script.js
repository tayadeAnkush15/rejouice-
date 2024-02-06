gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("#main", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




function cursorEffect(){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dets) {
  // normal code
  // cursor.style.left=dets.x + "px"
  // cursor.style.top=dets.y + "px"

  // gsap code
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y, 
  });
})
page1Content.addEventListener("mouseenter" , function(dets){
      gsap.to(cursor,{
        scale:1,
        opacity:1
      })
})
page1Content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor ,{
        scale:0,
        opacity:0

    })

})
}
cursorEffect();

function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration : 1,
        ScrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            end: "top 47%",
            // markers:true
        }
    })
}
page2Animation()

function cursorEffect1(){

    var page4 = document.querySelector("#page4");
var cursor1 = document.querySelector("#cursor1");

page4.addEventListener("mousemove", function (dets1) {

  // gsap code
  gsap.to(cursor1, {
    x: dets1.x,
    y: dets1.y, 
  });
})
page4.addEventListener("mouseenter" , function(dets1){
      gsap.to(cursor1,{
        scale:1,
        opacity:1
      })
})
page4.addEventListener("mouseleave",function(dets1){
    gsap.to(cursor1 ,{
        scale:0,
        opacity:0

    })

})
}
cursorEffect1();

// swiper

 function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 }

 sliderAnimation()

//  loader
 var t1= gsap.timeline()
 t1.from("#loader h3",{
    x:500,
    duration:0.7,
    stagger:0.3
 })
 t1.to("#loader h3",{
    opacity:0,
    duration:1,
    x: -10,
    stagger:0.1
 })
 t1.to("#loader ",{
    opacity:0
 })
 t1.from("#page1-content h1 span ",{
  x:400,
  y:100,
  opacity:0,
  stagger:0.1,
  duration: -0.5
 })
 t1.from("#page2 h1  ",{
  x: -400,
  y:500,
  
  opacity:5,
  stagger:0.5,
  duration: 10
 })
t1.to("#loader h3",{
    display:"none",
   
})


