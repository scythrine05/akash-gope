import { gsap } from "gsap";

const additionalX = { val: 0 };
let offset = 0;
let originalImages = gsap.utils.toArray(".gallery-image-wrapper ");
const container = document.querySelector(".gallery");
const sliderWidth = container.offsetWidth;

// DUPLICATE IMAGES FOR LOOP
originalImages.forEach((image) => {
  var clone = image.cloneNode(true);
  container.appendChild(clone);
});

let images = gsap.utils.toArray(".gallery-image-wrapper ");

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
