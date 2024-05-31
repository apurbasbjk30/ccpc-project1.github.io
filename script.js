
let lastScrollTop = 20;

window.addEventListener('scroll', function() {
    const svgContainer = document.querySelector('.svg-container');
    const svgElement = document.getElementById('mySVG');
    const navButtons = document.querySelector('.navbar');
    const outputDiv = document.getElementById('output');
    const wordDiv = document.getElementById('word');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 200) {
        if (scrollTop < lastScrollTop) {
            document.body.classList.add('scrolled-up');
            svgElement.src = 'logo.svg';
            svgContainer.style.top = '44.5%';
            svgContainer.style.left = '48.5%';
            svgContainer.style.transform = 'translate(-50%, -50%)';
            svgContainer.style.width = '250px';
            svgContainer.style.height = '22px';
            navButtons.style.display = 'none';
            //outputDiv.style.display = 'block';
            wordDiv.style.fontSize = '28px';
            
        } else {
            document.body.classList.remove('scrolled-up');
            svgElement.src = 'navlogo.svg';
            svgContainer.style.top = '10px';
            svgContainer.style.left = '50px';
            svgContainer.style.transform = 'translate(0, 0)';
            svgContainer.style.width = '250px';
            svgContainer.style.height = '26px';
            navButtons.style.display = 'block';
            //outputDiv.style.display = 'none';
            wordDiv.style.fontSize = '14px';
            
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


function printSentenceWithBlinking(sentences) {
    const output = document.getElementById("word");
    let sentenceIndex = 0;
    let index = 0;
    let printInterval;
    function printWithBlinkingUnderscore() {
      const currentSentence = sentences[sentenceIndex];
      printInterval = setInterval(() => {
        if (index <= currentSentence.length) {
          if (index < currentSentence.length) {
            output.innerHTML = currentSentence.substring(0, index) + '<span class="blink">_</span>';
          } else {
            output.innerHTML = currentSentence.substring(0, index); // Ensure the full sentence is displayed before backspacing
          }
          index++;
        } else {
          clearInterval(printInterval);
          setTimeout(() => {
            removeBackward(currentSentence);
          }, 500); // Delay before backspacing starts
        }
      }, 200); // Adjust interval for faster printing
    }
    function removeBackward(sentence) {
      printInterval = setInterval(() => {
        if (index >= 0) {
          output.innerHTML = sentence.substring(0, index) + '<span class="blink">_</span>';
          index--;
        } else {
          clearInterval(printInterval);
          // Move to the next sentence
          sentenceIndex++;
          if (sentenceIndex >= sentences.length) {
            sentenceIndex = 0; // Reset to the first sentence
          }
          setTimeout(() => {
            index = 0;
            printWithBlinkingUnderscore(); // Print the next sentence
          }, 1000); // Delay before printing the next sentence
        }
      }, 100); // Adjust interval for faster backspacing
    }
  
    printWithBlinkingUnderscore(); // Start the initial printing
  }
  
  const sentences = [
    "CU_Jharkhand",
    "Let's go out of the CodeSpace"
    
    // Add more sentences as needed
  ];
  
  printSentenceWithBlinking(sentences); // Call the function with the array of sentences
  
//navigation
//for responsive navbar
function toggleNav() {
    var nav = document.getElementById("myNav");
    var bars = document.querySelector('.container');
    
    // Toggle navigation visibility
    if (nav.style.display === "block") {
        nav.style.display = "none";
        bars.classList.remove("change");
    } else {
        nav.style.display = "block";
        bars.classList.add("change");
    }
}

// Reset navigation when a link is clicked
document.addEventListener('click', function(event) {
    var nav = document.getElementById("myNav");
    var bars = document.querySelector('.container');

    // Check if the clicked element is a link within the navigation
    if (event.target.tagName.toLowerCase() === 'a' && nav.contains(event.target)) {
        nav.style.display = "none";
        bars.classList.remove("change");
    }
});

//mouse hover on search box
document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.querySelector('.searchBox');
  const searchInput = document.querySelector('.searchInput');

  searchBox.addEventListener('mouseover', () => {
      searchInput.focus();
  });

  searchBox.addEventListener('mouseout', () => {
      searchInput.blur();
  });
});


//for circles 
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const circle1 = document.querySelector('.circle1');
  const circle2 = document.querySelector('.circle2');
  const circle3 = document.querySelector('.circle3');
  const circle4 = document.querySelector('.circle4');
  const right1Div = document.querySelector('.right1');
  const start = windowHeight / 2; // Start animation when scrolled halfway down the viewport
  const end = windowHeight; // End animation when the viewport height is reached

  if (scrollPosition >= start && scrollPosition <= end) {
    const progress = (scrollPosition - start) / (end - start);


    circle3.style.left = `${progress * 99}%`;
    circle3.style.top = `${65 - (65 - 38) * progress}%`;

    circle2.style.left = `${progress * 85}%`;
    circle2.style.top = `${50 - 50 * progress}%`;

    circle1.style.left = `${progress * 99}%`;
    circle1.style.top = `${9 + (50 - 23) * progress}%`;

    circle4.style.left = `${progress * 85}%`;
    circle4.style.top = `${45 - (45 - 45) * progress}%`;
  } else if (scrollPosition < start) {
    // Reset positions if above start scroll position
    circle1.style.left = `0%`;
    circle1.style.top = `50%`;

    circle2.style.left = `0%`;
    circle2.style.top = `50%`;

    circle3.style.left = `0%`;
    circle3.style.top = `50%`;

    circle4.style.left = `0%`;
    circle4.style.top = `50%`;
  } else {
    // Fix positions if below end scroll position
    circle1.style.left = `98%`;
    circle1.style.top = `36%`;

    circle2.style.left = `85%`;
    circle2.style.top = `0%`;

    circle3.style.left = `99%`;
    circle3.style.top = `38%`;

    circle4.style.left = `84%`;
    circle4.style.top = `45%`;
  }
  if (scrollPosition > end) {
    right1Div.style.display = 'block';
  } else {
    right1Div.style.display = 'none';
  }
});
