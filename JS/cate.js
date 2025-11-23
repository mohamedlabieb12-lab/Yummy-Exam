let rowData = document.getElementById("rowData");
let rowData1 = document.getElementById("rowData1");

let searchContainer = document.getElementById("searchContainer");
let submitBtn;
let allData=[];
// =========================================category=====--------------=========

      displayCategories()

var myHttp = new XMLHttpRequest();
myHttp.open("GET" , "  https://www.themealdb.com/api/json/v1/1/categories.php ")
myHttp.send();

myHttp.addEventListener("load" ,function(){
if (myHttp.status >= 200 && myHttp.status<300){
     allData= JSON.parse(myHttp.responseText).categories;
     displayCategories()
    // console.log( allData);
}

})

function displayCategories(){

  let box=" ";
    
    for (let i=0 ;  i<allData.length; i++){

        box += `   
        
         <div class="col-md-3">
                <div onclick="getMealDetails('53133')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${allData[i].strCategoryThumb} " alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${allData[i].strCategory}</h3>
                         <h5  class= " fw-light fs-6 "> ${allData[i].strCategoryDescription.split(" ").slice(0, 25).join(" ")}} </h5>
                    </div>
                </div>
        </div>
        
        
        `
    }
rowData2.innerHTML=box;
}

// 
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


nav-linksss
}