let rowData = document.getElementById("rowData");
let rowData6 = document.getElementById("rowData6");

let searchBar = document.getElementById("searchBar");
// let submitBtn;
let allData=[];
// =========================================category=====--------------=========
// searchProduct()/

var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s")
myHttp.send();
myHttp.addEventListener("load" ,function(){
if (myHttp.status >= 200 && myHttp.status < 300){
     allData= JSON.parse(myHttp.responseText).meals;

    //  displayall();
    // displayMain();
// /    // console.log(allData);
}

})

function displayMain(){

  let box=" ";
    
    for (let i= 0 ;  i < allData.length ; i++){

        box += `   
        
     <div class="col-md-3">
                <div onclick="getMealDetails('53133')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                   
                        <img class="w-100" src="${allData[i].strMealThumb}" alt="" srcset="">
                        <a href="${allData[i].strSource}" target="_blank " >
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${allData[i].strMeal}</h3>
                    </div>
                    </a>
                </div>
              </div>       
                `
    }
rowData6.innerHTML=box;

}
// ==========================================================


// Get the HTML element for the search input (from your HTML)
const searchInput = document.getElementById('searchBar'); 

// Get the HTML element for displaying results (from your HTML)
const resultsContainer = document.getElementById('rowData6'); 


// --- 1. Data Fetching and Initial Display ---

function fetchInitialData() {
    var myHttp = new XMLHttpRequest();
    // Using ?s=a for initial load to get a list of results (empty 's' can be unreliable)
    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=a"); 
    myHttp.send();

    myHttp.addEventListener("load" ,function(){
        if (myHttp.status >= 200 && myHttp.status < 300){
             // Store the fetched meals in the global allData array
             allData = JSON.parse(myHttp.responseText).meals || [];
             
             // Display all meals when the page first loads
             displayMeals(allData); 
        } else {
             console.error("Error fetching initial data: ", myHttp.status);
        }
    });
}

// Start the data fetching process
// fetchInitialData();


// --- 2. The Search Handler ---

// Attach the search function to the input event on the search bar
searchInput.addEventListener('input', handleSearch);

function handleSearch(event) {
    // 1. Get the current value from the input and convert to lowercase
    const searchTerm = event.target.value.toLowerCase();
    
    // 2. Filter the global 'allData' array based on the search term
    const filteredMeals = allData.filter(meal => {
        // Use includes() for a flexible, case-insensitive search on the meal name (strMeal)
        return meal && meal.strMeal && meal.strMeal.toLowerCase().includes(searchTerm);
    });
    
    // 3. Display the filtered results
    displayMeals(filteredMeals);
}


// --- 3. The Display Function (Modified displayMain) ---

/**
 * Renders a given list of meals into the results container (#rowData6).
 * @param {Array} mealsArray - The array of meal objects to display.
 */
function displayMeals(mealsArray) {
    let box = "";
    
    // Check if the array is null or empty
    if (!mealsArray || mealsArray.length === 0) {
        resultsContainer.innerHTML = '<div class="col-12 text-center text-white my-5"><h3>No meals found matching your search.</h3></div>';
        return;
    }

    // Loop through the meals and build the HTML content
    for (let i = 0; i < mealsArray.length; i++) {
        // We use mealsArray[i] instead of allData[i] to ensure we display the filtered list
        box += `   
        <div class="col-md-3">
            <div onclick="getMealDetails('${allData[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${allData[i].strMealThumb}" alt="${mealsArray[i].strMeal}">
                <a href="${allData[i].strSource || '#'}" target="_blank">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${allData[i].strMeal}</h3>
                    </div>
                </a>
            </div>
        </div>
        `;
    }
    // Update the inner HTML of the row container
    rowData6.innerHTML = box; 
}






// ==============================================================
function openNavbar(){

document.getElementById("openNavbar").classList.add("d-none");
document.getElementById("close-btn").classList.remove("d-none");
document.getElementById("nav-linksss").classList.remove("d-none");

// ========Closing Navbar==============
}

function closeNavbar(){

document.getElementById("close-btn").classList.add("d-none");
document.getElementById("openNavbar").classList.remove("d-none");
document.getElementById("nav-linksss").classList.add("d-none");



}