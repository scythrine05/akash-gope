import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

let reveal = document.querySelectorAll(".reveal");

reveal.forEach((el) => {
  let headings = el.querySelectorAll("h1, p, img");

  let tl = gsap.timeline().from(headings, {
    y: 80,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  ScrollTrigger.create({
    trigger: el,
    start: "top top",
    toggleActions: "play none none reverse ",
    animation: tl,
  });
});
