

function toggleAccordion(id) {
    var answer = document.getElementById(id);
    var icon = document.querySelector(`#${id} ~ .faq-header .faq-icon`);
  
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove('open');
    } else {
      answer.style.display = "block";
      icon.classList.add('open');
    }
  }
  
  // Get the testimonial container and buttons
const scrollContainer = document.getElementById('testimonial-container');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

// Function to scroll left
scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -200, // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});

// Function to scroll right
scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 200, // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});
