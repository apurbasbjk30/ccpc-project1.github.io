
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
            navButtons.style.display = 'flex';
            //outputDiv.style.display = 'none';
            wordDiv.style.fontSize = '14px';
            
        }
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
  const start = windowHeight / 2; // Start animation when scrolled halfway down the viewport
  const end = windowHeight; // End animation when the viewport height is reached

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
    circle4.style.top = `45%`;
  }
  if (scrollPosition > end) {
    right1Div.style.display = 'block';
  } else {
    right1Div.style.display = 'none';
  }
});
