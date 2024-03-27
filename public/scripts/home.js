function toggleMenuHidden() {
  document.getElementById("menu").classList.toggle("hidden");
  const menuToggleButton = document.getElementById("menuToggleButton")
  if (menuToggleButton.getAttribute('src') == 'assets/MenuIcon.svg') {
    menuToggleButton.setAttribute('src', 'assets/CloseIcon.svg')
  }
  else if(menuToggleButton.getAttribute('src') == 'assets/CloseIcon.svg') {
    menuToggleButton.setAttribute('src', 'assets/MenuIcon.svg')
  }
}