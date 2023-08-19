const faqQuestion = document.querySelectorAll('.faq-middle-item');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqIcons = document.querySelectorAll('.faq-icon');

// Select faq-middle-item
function selectItem(clickedElement) {
  console.log("Clicked");
  changeIcon(clickedElement); // Pass the clicked element to changeIcon
  console.log("icon-changed");
  removeShow();
  // Grab content item from DOM
  const faqActive = document.querySelector(`#${clickedElement.id}-answer`);
  // Add show class
  faqActive.classList.add('show');
}

function changeIcon(clickedElement) {
  // Remove 'fa-mark' class from all faq-icons
  faqIcons.forEach(item => item.classList.remove('fa-xmark'));
  
  // Find the faq-icon without the 'fa-plus' class and add 'fa-plus' to it
  const faqIconToMark = Array.from(faqIcons).find(item => !item.classList.contains('fa-plus'));
  if (faqIconToMark) {
    faqIconToMark.classList.add('fa-plus');
  }

  // Grab the faq-icon class within the clicked element
  const faqIcon = clickedElement.querySelector('.faq-icon');
  faqIcon.classList.remove('fa-plus');
  faqIcon.classList.add('fa-xmark');
}

function hideAnswer(clickedElement) {
    
    // Grab the faq-icon class within the clicked element
    const faqIcon = clickedElement.querySelector('.faq-icon');
    faqIcon.classList.remove('fa-xmark');
    faqIcon.classList.add('fa-plus');
    const faqId = clickedElement.id.replace('faq-', '');
    const correspondingAnswer = document.querySelector(`#faq-${faqId}-answer`);
    
    correspondingAnswer.classList.remove('show');
  }
  


function removeShow() {
  faqAnswers.forEach(item => item.classList.remove('show'));
}

// Listen for click on faq
faqQuestion.forEach(item => item.addEventListener('click', function () {
    const faqId = this.id.replace('faq-', '');
    const correspondingAnswer = document.querySelector(`#faq-${faqId}-answer`);
    
    if (correspondingAnswer.classList.contains('show')) {
      hideAnswer(this);
    } else {
      selectItem(this); // Pass the clicked element to showAnswer
    }
  }));

