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