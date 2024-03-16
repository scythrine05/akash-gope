import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".wb", {
    transformOrigin: "center center",
    scale: 75,
    ease: "none",
    scrollTrigger: {
      trigger: ".page_1-component",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: 1,
    },
  });
});
