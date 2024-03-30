let searchField = "";
let cuisineFilter = "";
let dietFilter = "";
let typeFilter = "";
let timeFilter = "";
let offset = 0;

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

    let apiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ac8f41702dc6488f85d3dda5ccc52208&instructionsRequired=true&addRecipeInformation=true&number=6&offset=" + offset;
    if (searchField != "") {
      let newApiUrl = apiUrl + "&query=" + searchField;
      apiUrl = newApiUrl;
    }
    if (cuisineFilter != "") {
      let newApiUrl = apiUrl + "&cuisine=" + cuisineFilter;
      apiUrl = newApiUrl;
    }
    if (dietFilter != "") {
      let newApiUrl = apiUrl + "&diet=" + dietFilter;
      apiUrl = newApiUrl;
    }
    if (typeFilter != "") {
      let newApiUrl = apiUrl + "&type=" + typeFilter;
      apiUrl = newApiUrl;
    }
    if (timeFilter != "") {
      let newApiUrl = apiUrl + "&time=" + timeFilter;
      apiUrl = newApiUrl;
    }
    // let apiUrl = 'http://localhost:3000/scripts/result1.json';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error when calling ' + apiUrl);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        let displayResults = document.getElementById("displayResults");
        displayResults.innerHTML = "";
        data.results.forEach(recipe => {
          displayResults.innerHTML += `
          <div class="w-[300px] h-[400px] bg-medium-cream flex flex-wrap rounded-md p-2 drop-shadow-md">
            <img src=${recipe["image"]} alt="image of ${recipe["title"]}" width="300" height="300" class="rounded-md border-4 border-dark-cream" />
            <h1 class="w-full text-xl font-medium -mb-2 text-center">${recipe["title"]}</h1>
            <h2 class="w-full text-lg text-center">${recipe["readyInMinutes"]} minutes</h2>
            <a href=${recipe["sourceUrl"]} target="_blank" class="w-[300px] h-12 break-all bg-dark-cream hover:drop-shadow-md p-2 rounded-full text-center border-2 border-black">Ingredients and instructions here!</a>
          </div>
          `;
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      })

    // console.log(apiUrl);
    // console.log(`${searchField} ${cuisineFilter} ${dietFilter} ${typeFilter} ${timeFilter}`);
  }
}

function nextPage() {
  console.log(offset);
  offset += 6;
  console.log(offset);

  let apiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ac8f41702dc6488f85d3dda5ccc52208&instructionsRequired=true&addRecipeInformation=true&number=6&offset=" + offset;
  if (searchField != "") {
    let newApiUrl = apiUrl + "&query=" + searchField;
    apiUrl = newApiUrl;
  }
  if (cuisineFilter != "") {
    let newApiUrl = apiUrl + "&cuisine=" + cuisineFilter;
    apiUrl = newApiUrl;
  }
  if (dietFilter != "") {
    let newApiUrl = apiUrl + "&diet=" + dietFilter;
    apiUrl = newApiUrl;
  }
  if (typeFilter != "") {
    let newApiUrl = apiUrl + "&type=" + typeFilter;
    apiUrl = newApiUrl;
  }
  if (timeFilter != "") {
    let newApiUrl = apiUrl + "&time=" + timeFilter;
    apiUrl = newApiUrl;
  }

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error when calling ' + apiUrl);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      let displayResults = document.getElementById("displayResults");
      displayResults.innerHTML = "";
      data.results.forEach(recipe => {
        displayResults.innerHTML += `
        <div class="w-[300px] h-[400px] bg-medium-cream flex flex-wrap rounded-md p-2 drop-shadow-md">
          <img src=${recipe["image"]} alt="image of ${recipe["title"]}" width="300" height="300" class="rounded-md border-4 border-dark-cream" />
          <h1 class="w-full text-xl font-medium -mb-2 text-center">${recipe["title"]}</h1>
          <h2 class="w-full text-lg text-center">${recipe["readyInMinutes"]} minutes</h2>
          <a href=${recipe["sourceUrl"]} target="_blank" class="w-[300px] h-12 break-all bg-dark-cream hover:drop-shadow-md p-2 rounded-full text-center border-2 border-black">Ingredients and instructions here!</a>
        </div>
        `;
      });
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

function prevPage() {
  console.log(offset);
  if (!(offset - 6 < 0)) {
    offset -= 6;
  }
  console.log(offset);

  let apiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=ac8f41702dc6488f85d3dda5ccc52208&instructionsRequired=true&addRecipeInformation=true&number=6&offset=" + offset;
  if (searchField != "") {
    let newApiUrl = apiUrl + "&query=" + searchField;
    apiUrl = newApiUrl;
  }
  if (cuisineFilter != "") {
    let newApiUrl = apiUrl + "&cuisine=" + cuisineFilter;
    apiUrl = newApiUrl;
  }
  if (dietFilter != "") {
    let newApiUrl = apiUrl + "&diet=" + dietFilter;
    apiUrl = newApiUrl;
  }
  if (typeFilter != "") {
    let newApiUrl = apiUrl + "&type=" + typeFilter;
    apiUrl = newApiUrl;
  }
  if (timeFilter != "") {
    let newApiUrl = apiUrl + "&time=" + timeFilter;
    apiUrl = newApiUrl;
  }

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error when calling ' + apiUrl);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      let displayResults = document.getElementById("displayResults");
      displayResults.innerHTML = "";
      data.results.forEach(recipe => {
        displayResults.innerHTML += `
        <div class="w-[300px] h-[400px] bg-medium-cream flex flex-wrap rounded-md p-2 drop-shadow-md">
          <img src=${recipe["image"]} alt="image of ${recipe["title"]}" width="300" height="300" class="rounded-md border-4 border-dark-cream" />
          <h1 class="w-full text-xl font-medium -mb-2 text-center">${recipe["title"]}</h1>
          <h2 class="w-full text-lg text-center">${recipe["readyInMinutes"]} minutes</h2>
          <a href=${recipe["sourceUrl"]} target="_blank" class="w-[300px] h-12 break-all bg-dark-cream hover:drop-shadow-md p-2 rounded-full text-center border-2 border-black">Ingredients and instructions here!</a>
        </div>
        `;
      });
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}