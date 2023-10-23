/**
* Template Name: MyResume - v4.7.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });

    
    // gsap.set('.work-item img.swipeimage', { yPercent: -50, xPercent: -50 })

    // gsap.utils.toArray(".work-item").forEach((el) => {
    //   const image = el.querySelector('img.swipeimage'),
    //         setX = gsap.quickSetter(image, "x", "px"),
    //         setY = gsap.quickSetter(image, "y", "px"),
    //         align = e => {
    //           setX(e.clientX);
    //           setY(e.clientY);
    //         },
    //         startFollow = () => document.addEventListener("mousemove", align),
    //         stopFollow = () => document.removeEventListener("mousemove", align),
    //         fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
      
    //   el.addEventListener('mouseenter', (e) => {
    //     fade.play();
    //     startFollow();
    //     align(e);
    //   });
      
    //   el.addEventListener('mouseleave', () => fade.reverse());
     
    // });

  })()