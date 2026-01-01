
let mainColor = localStorage.getItem('color_option');

if (mainColor !== null) {
  // Apply saved color
  document.documentElement.style.setProperty('--main-color', mainColor);

  // Remove active class from all color list items
  document.querySelectorAll('.colors-list li').forEach(element => {
    element.classList.remove('active');

    // Add active to the saved color
    if (element.dataset.color === mainColor) {
      element.classList.add('active');
    }
  });
}


document.querySelector('.toggle-setting .fa-gear').onclick = function () {
  document.querySelector('.setting-box').classList.toggle('open');
  this.classList.toggle('fa-spin');
};


// Handle Color Switching
// 
const colorOptions = document.querySelectorAll('.colors-list li');

colorOptions.forEach(li => {
  li.addEventListener('click', (e) => {
    const selectedColor = e.target.dataset.color;

    // Set main color and save to localStorage
    document.documentElement.style.setProperty('--main-color', selectedColor);
    localStorage.setItem('color_option', selectedColor);

    // Remove active class from all
    colorOptions.forEach(el => el.classList.remove('active'));

    // Add active class to the clicked one
    e.target.classList.add('active');
  });
});


// Background Randomization
// 
let backgroundOption = true;
let backgroundInterval;

// Check localStorage for saved background preference
let savedBackgroundOption = localStorage.getItem('background_option');

if (savedBackgroundOption !== null) {
  backgroundOption = savedBackgroundOption === 'true';

  // Remove active class from all spans
  document.querySelectorAll('.random-background span').forEach(span => {
    span.classList.remove('active');
  });

  // Add active to the correct one
  document
    .querySelector('.random-background span[data-background="' + (backgroundOption ? 'yes' : 'no') + '"]')
    .classList.add('active');
}

// Handle background toggle clicks
const backgroundSpans = document.querySelectorAll('.random-background span');
// sheck local storage 
let backgroundItem = localStorage.getItem('background_option');
if(backgroundItem !== null){
    if(backgroundItem === 'true'){
        
    }
}

backgroundSpans.forEach(span => {
  span.addEventListener('click', (e) => {
    // Remove 'active' from all
    backgroundSpans.forEach(el => el.classList.remove('active'));

    // Add 'active' to clicked one
    e.target.classList.add('active');

    // Check data-background attribute
    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeBackgroundImages();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }

    // Save to localStorage
    localStorage.setItem('background_option', backgroundOption);
  });
});



// Background Image Randomizer
// 
let landingPage = document.querySelector('.landing-page');
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

function randomizeBackgroundImages() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomIndex] + '")';
    }, 1000); // Every 1 seconds
  }
}

// Start background randomizer if option is true
if (backgroundOption === true) {
  randomizeBackgroundImages();
}
let ourSkills = document.querySelector('.skills');
let skillsAnimated = false; 

window.onscroll = function () {
  let skillsOffsetTop = ourSkills.offsetTop;
  let skillsOffsetHeight = ourSkills.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {
    if (!skillsAnimated) {
     
      let allSkills = document.querySelectorAll('.skills-box .skill-progress span');

      allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
      });

      skillsAnimated = true;
    }
  }
};
// create popup with the image
let ourgallery = document.querySelectorAll('.gallery .images-box img');
ourgallery.forEach(img =>{
  img.addEventListener('click', (e)=>{
    let overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
    // create the popup 
    let popupbox = document.createElement('div');
    popupbox.className = 'popup-box';
    if(img.alt !== null){
      // create heading
      let imgheadimg = document.createElement('h3')
      let imgtext = document.createTextNode(img.alt);
      imgheadimg.appendChild(imgtext);
      popupbox.appendChild(imgheadimg);
    }
    let popupImg = document.createElement('img');
    popupImg.src = img.src;
    // add img to popup box 
    popupbox.appendChild(popupImg);
    document.body.appendChild(popupbox);
    // create close span
    let closebottun = document.createElement('span');
    let closebottuntext = document.createTextNode('X');
    closebottun.appendChild(closebottuntext);
    closebottun.className = 'close-button';
    // add close button
    popupbox.appendChild(closebottun);



  });
});
//close popup
document.addEventListener('click', (e)=>{
  if(e.target.className == 'close-button'){
    e.target.parentNode.remove();
    document.querySelector('.popup-overlay').remove();
  }
});
const allLinks = document.querySelectorAll('.links a'); 
const albullets = document.querySelectorAll('.nav-bullets .bullet'); 

function scrolltosomewhere(elements) { 
  elements.forEach(element => { 
    element.addEventListener('click', (e) => { 
      e.preventDefault(); 
      const targetSection = e.target.dataset.section || e.currentTarget.querySelector('.tooltip')?.dataset.section;
      if (targetSection) {
        document.querySelector(targetSection).scrollIntoView({ 
          behavior: 'smooth' 
        }); 
      }
    }); 
  }); 
} 

scrolltosomewhere(allLinks); 
scrolltosomewhere(albullets);
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll('.active').forEach(element =>{
    element.classList.random('active');
  });
  e.target.classList.add('active');
  
}

let bulletsSpan = document.querySelectorAll(".bullets-option span"); 
let bulletsContainer = document.querySelector(".nav-bullets"); 


bulletsSpan.forEach(span => { 
  span.addEventListener('click', (e) => { 
    const displayOption = e.target.dataset.display;
    
    if (displayOption === 'show') { 
      bulletsContainer.style.display = 'block'; 
    } else { 
      bulletsContainer.style.display = 'none'; 
    } 
  }); 
});
const bulletsSpanw = document.querySelectorAll('.bullets-option span');

bulletsSpanw.forEach(span => {
  span.addEventListener('click', (e) => {

    bulletsSpanw.forEach(el => el.classList.remove('active'));

    e.target.classList.add('active');

    
    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeBackgroundImages();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }

   
    localStorage.setItem('background_option', backgroundOption);
  });
});
let togglebtn = document.querySelector('.toggle-menu'); 
let tlinks = document.querySelector('.links'); 

togglebtn.onclick = function (e){ 
  e.stopPropagation(); 
  this.classList.toggle('menu-active'); 
  tlinks.classList.toggle('open'); 
}; 

tlinks.onclick = function (e) { 
  e.stopPropagation(); 
};


document.addEventListener('click', function () {
  if (tlinks.classList.contains('open')) {
    tlinks.classList.remove('open');
    togglebtn.classList.remove('menu-active');
  }
});
