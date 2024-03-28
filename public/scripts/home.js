function toggleMenuHidden() {
  document.getElementById("menu").classList.toggle("hidden");
  const menuToggleButton = document.getElementById("menuToggleButton");
  if (menuToggleButton.getAttribute('src') == 'assets/MenuIcon.svg') {
    menuToggleButton.setAttribute('src', 'assets/CloseIcon.svg');
  }
  else if(menuToggleButton.getAttribute('src') == 'assets/CloseIcon.svg') {
    menuToggleButton.setAttribute('src', 'assets/MenuIcon.svg');
  }
}

function toggleFilterCuisine() {
  document.getElementById("cuisine-dropdown").classList.toggle("hidden");
}

function toggleFilterDiet() {
  document.getElementById("diet-dropdown").classList.toggle("hidden");
}

function toggleFilterType() {
  document.getElementById("type-dropdown").classList.toggle("hidden");
}

function toggleFilterTime() {
  document.getElementById("time-dropdown").classList.toggle("hidden");
}