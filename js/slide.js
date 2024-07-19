document.addEventListener('DOMContentLoaded', function () {
  const messages = document.querySelectorAll('.slide-message');
  let currentSlide = 0;
  const interval = 6000; // Time each slide is displayed
  const transitionDuration = 1000; // Time it takes for slide transition

  function showNextMessage() {
    // Hide the current slide
    messages[currentSlide].classList.remove('active');
    messages[currentSlide].classList.add('out');

    // Update the current slide index
    currentSlide = (currentSlide + 1) % messages.length;

    // Show the next slide
    setTimeout(() => {
      messages[currentSlide].classList.remove('out');
      messages[currentSlide].classList.add('active');
    }, transitionDuration);
  }

  // Initialize the first slide
  messages[currentSlide].classList.add('active');

  // Set interval to show the next message automatically
  setInterval(showNextMessage, interval);
});
