/* SECTION TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  });
});

/* SECTION TABS END */

/*DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  
});

//count num projects
function countUp() {
  let from = 0;
  let to = 60;
  let step = to > from ? 1 : -1;
  let interval = 65;

  if (from == to) {
    document.querySelector(".profile__info-number").textContent = from;
    return;
  }
  let counter = setInterval(function () {
    from += step;
    document.querySelector(".profile__info-number").textContent = "+"+from;

    if (from == to) {
      clearInterval(counter);
    }
  }, interval);
}
//call function
countUp();

//Effect typewriter
const textDisplay= document.getElementById('profession');
const profession=['Frontend Developer','Systems Engineer','Data Analyst', 'IT Audit']
let i=0
let j=0
let currentProfession= []
let isDeleting=false
let isEnd=false
function loop(){
  isEnd=false
  textDisplay.innerHTML = currentProfession.join('')

  if (i<profession.length){

    if(!isDeleting && j <= profession[i].length){
      currentProfession.push(profession[i][j])
      j++
    }

    if(isDeleting && j <= profession[i].length){
      currentProfession.pop(profession[i][j])
      j--
    }

    if(j == profession[i].length){
      isEnd=true
      isDeleting=true
    }

    if(isDeleting && j === 0){
      currentProfession = []
      isDeleting=false
      i++
      if(i == profession.length){
        i=0
      }
    }
  }
  //var speed objects profession
  const speedUp = Math.random()* (80-50) +50
  const normalSpeed = Math.random()*(300-200) +200
  const time= isEnd ? 2000: isDeleting ? speedUp: normalSpeed
  setTimeout(loop, time)
}
loop()
