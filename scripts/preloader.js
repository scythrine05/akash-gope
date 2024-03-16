import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  splitTextIntoSpans(".page_1-text-wrapper h1");
});

function splitTextIntoSpans(selector) {
  var element = document.querySelector(selector);
  if (element) {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    element.innerHTML = splitText;
  }
}

function startLoader() {
  let counterElement = document.querySelector(".counter p");
  var currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      animateText();
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;
    currentValue = currentValue > 100 ? 100 : currentValue;

    counterElement.innerHTML =
      currentValue
        .toString()
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("") + "<span>%</span>";

    let delay = Math.floor(Math.random() * 200) + 100;
    setTimeout(updateCounter, delay);
  }

  function animateText() {
    setTimeout(() => {
      gsap.to(".counter p span", {
        top: "-400px",
        stagger: 0.1,
        ease: "power3.inOut",
        duration: 1,
      });

      gsap.to(".preloader", {
        opacity: 0,
        ease: "power3.inOut",
        duration: 1,
        delay: 1,
        display: "none",
      });

      gsap.to(".logo-wrapper img", {
        opacity: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        duration: 1,
        delay: 2,
      });

      gsap.to(".page_1-text-wrapper h1 span", {
        top: 0,
        stagger: 0.1,
        ease: "power3.inOut",
        duration: 2,
        delay: 2,
      });

      gsap.to(".page_1-text-wrapper div span", {
        top: 0,
        stagger: 0.1,
        ease: "power3.inOut",
        duration: 2,
        delay: 2,
      });
    });
  }

  updateCounter();
}

startLoader();
