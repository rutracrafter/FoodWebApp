let searchField = "";
let cuisineFilter = "";
let dietFilter = "";
let typeFilter = "";
let timeFilter = "";

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

function toggleFilter(filter) {
  id = filter + "-dropdown";
  document.getElementById(id).classList.toggle("hidden");
}

function cuisineSelection(selection) {
  cuisineFilter = selection;
  console.log(cuisineFilter)
}

function dietSelection(selection) {
  dietFilter = selection;
  console.log(dietFilter)
}

function typeSelection(selection) {
  typeFilter = selection;
  console.log(typeFilter)
}

function timeSelection(selection) {
  timeFilter = selection;
  console.log(timeFilter)
}

function clearSearchText() {
  document.getElementById("searchBar").value = "";
}

function updateSearchField(newVal) {
  document.getElementById("searchBar").value = newVal;
  searchField = newVal;
  console.log(searchField)
}

function searchEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const apiUrl = "https://fakewebsite.fake";
    // implement logic to actually query api and display returned data, remember pagination

    console.log(`${searchField} ${cuisineFilter} ${dietFilter} ${typeFilter} ${timeFilter}`);
  }
}