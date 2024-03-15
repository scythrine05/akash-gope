import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CSSRulePlugin } from "gsap/all";

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

const additionalX = { val: 0 };
let offset = 0;
let originalImages = gsap.utils.toArray(".image");
const container = document.querySelector(".gallery");
const sliderWidth = container.offsetWidth;

// DUPLICATE IMAGES FOR LOOP
originalImages.forEach((image) => {
  var clone = image.cloneNode(true);
  container.appendChild(clone);
});

let images = gsap.utils.toArray(".image");

// SET ANIMATION
images.forEach((item) => {
  gsap.to(item, {
    x: "-=" + Number(sliderWidth / 2),
    duration: 20,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => {
        offset += additionalX.val;
        x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
        return x;
      }),
    },
  });
});

var textboxes = document.querySelectorAll(".input-text");

// Iterate over each textbox
textboxes.forEach(function (textbox) {
  // Add an event listener for the 'input' event
  textbox.addEventListener("input", function () {
    // Check if the textbox has some value
    if (this.value.trim() !== "") {
      // If it has a value, add the 'not-empty' class
      this.classList.add("not-empty");
    } else {
      // If it's empty, remove the 'not-empty' class
      this.classList.remove("not-empty");
    }
  });
});

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

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
