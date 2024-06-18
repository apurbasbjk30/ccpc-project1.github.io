
let lastScrollTop = 10;

window.addEventListener('scroll', function() {
  const svgContainer = document.querySelector('.svg-container');
  const svgElement = document.getElementById('mySVG');
  const navButtons = document.querySelector('.navbar');
  const outputDiv = document.getElementById('output');
  const wordDiv = document.getElementById('word');
 
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop <= 0) {
      // Scroll position is at or near the top
      document.body.classList.add('scrolled-up');
      svgElement.src = 'img/logo.svg';
      svgContainer.style.top = '44.5%';
      svgContainer.style.left = '48.5%';
      svgContainer.style.transform = 'translate(-50%, -50%)';
      svgContainer.style.width = '250px';
      svgContainer.style.height = '22px';
      navButtons.style.display = 'none';
      //outputDiv.style.display = 'block';
      wordDiv.style.fontSize = '28px';
      
      
  } else {
      // Scroll position is not at the top
      document.body.classList.remove('scrolled-up');
      svgElement.src = 'img/navlogo.svg';
      svgContainer.style.top = '10px';
      svgContainer.style.left = '50px';
      svgContainer.style.transform = 'translate(0, 0)';
      svgContainer.style.width = '250px';
      svgContainer.style.height = '26px';
      navButtons.style.display = 'flex';
      //outputDiv.style.display = 'none';
      wordDiv.style.fontSize = '14px';
      
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
  const start = windowHeight / 4; // Start animation when scrolled halfway down the viewport
  const end = windowHeight / 1.5; // End animation when the viewport height is reached

  if (scrollPosition >= start && scrollPosition < end) {
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
    circle4.style.top = `46%`;
  }
  if (scrollPosition > end) {
    right1Div.style.display = 'block';
  } else {
    right1Div.style.display = 'none';
  }
});


    // JavaScript for slideshow functionality
    var slideIndex = 0;
    var slides = document.getElementsByClassName("slide-container");

    // Function to show slides
    function showSlides() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides initially
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;  // Reset index if it exceeds number of slides
        }
        slides[slideIndex - 1].style.display = "block";  // Display the current slide
        setTimeout(showSlides, 2000);  // Change image every 2 seconds
    }

    // Call the showSlides function to start the slideshow
    showSlides();
    // Initial text for the terminal with a placeholder for the red text
const initialText = `Ccpc:~$ ./<span class="red-text">start-team.sh</span>\n
Loading project dependencies... <span class="red-text">Done</span>\n
Setting up virtual environment... <span class="red-text">Done</span>\n
Retrieving team member data...\n
<span class="red-text">Download completed (320 KB in 1s)</span>\n
Initializing member profiles...\n
Member profiles loaded successfully!\n
<span class="green-text">Click on the images to view detailed profiles </span>`;

// Details of each student
const studentDetails = {
    Sandeep: { name: "Sandeep", role: "Executive", linkedin: "https://www.linkedin.com/in/sandeep" },
    Om: { name: "Om Vishesh", role: "Executive", linkedin: "https://www.linkedin.com/in/om" },
    Reyaz: { name: "Reyaz", role: "Executive", linkedin: "https://www.linkedin.com/in/reyaz" },
    AdityaSC: { name: "Aditya SC", role: "Executive", linkedin: "https://www.linkedin.com/in/aditya" },
    Priyanshu: { name: "Priyanshu", role: "Executive", linkedin: "https://www.linkedin.com/in/priyanshu" },
    Abhimaan: { name: "Abhimaan", role: "Executive", linkedin: "https://www.linkedin.com/in/abhimaan" },
    Krish: { name: "Krish", role: "Executive", linkedin: "https://www.linkedin.com/in/krish" }
};

// Function to type out text
function typeText(element, text, callback) {
    let i = 0;
    function typing() {
        // Use a temporary div to avoid HTML entities being displayed
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text.substring(0, i + 1);
        element.innerHTML = tempDiv.innerHTML + '<span class="blinking-cursor">_</span>';
        i++;
        if (i < text.length) {
            setTimeout(typing, 50);  // Adjust typing speed here
        } else {
            if (callback) callback();
        }
    }
    typing();
}

// Function to display details when an image is clicked
function displayDetail(studentName) {
    const student = studentDetails[studentName];
    const detailText = `const TeamMember {\n\tname: ${student.name};\n\trole: ${student.role};\n\tcontact: <a href="${student.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>;\n}; `;
    const terminalElement = document.getElementById('studentbody');
    typeText(terminalElement, detailText);
}

// When the page loads, type out the initial text
document.addEventListener('DOMContentLoaded', function() {
    const terminalElement = document.getElementById('studentbody');
    typeText(terminalElement, initialText);
});