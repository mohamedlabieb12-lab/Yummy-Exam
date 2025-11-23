let rowData = document.getElementById("rowData");
// let rowData2 = document.getElementById("rowData2");

// let searchContainer = document.getElementById("searchContainer");
// let submitBtn;
let allData=[];
// =========================================category=====--------------=========


// var myHttp = new XMLHttpRequest();
// myHttp.open("GET" , "  https://www.themealdb.com/api/json/v1/1/categories.php ")
// myHttp.send();
// myHttp.addEventListener("load" ,function(){
// if (myHttp.status >= 200 && myHttp.status<300){
//      allData= JSON.parse(myHttp.responseText).categories;
//      displayCategories()
//     // console.log( allData);
// }

// })

// function displayCategories(){

//   let box=" ";
    
//     for (let i=0 ;  i<allData.length; i++){

//         box += `   
        
//          <div class="col-md-3">
//                 <div onclick="getMealDetails('53133')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${allData[i].strCategoryThumb} " alt="" srcset="">
//                     <div class="meal-layer position-absolute text-center text-black p-2">
//                         <h3>${allData[i].strCategory}</h3>
//                          <h5  class= " fw-light fs-6 "> ${allData[i].strCategoryDescription} </h5>
//                     </div>
//                 </div>
//         </div>
        
        
//         `
//     }
// rowData2.innerHTML=box;


// -----------------------------------------------------------------


// console.log(allData);

// var myHttp = new XMLHttpRequest();
// myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?a=list")
// myHttp.send();

// myHttp.addEventListener("load" ,function(){
// if (myHttp.status >= 200 && myHttp.status < 300){
//      allData= JSON.parse(myHttp.responseText).meals;

//     //  displayall();
//     displayarea();

// //  console.log( myHttp.response);
//     console.log(allData);
// }

// })

// function displayarea(){

//   let box=" ";
    
//     for (let i= 0 ;  i < allData.length ; i++){

//         box += `   
        
//          <div class="col-md-3">
//                 <div onclick="getMealDetails('53133')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <div onclick="getAreaMeals('Vietnamese')" class="rounded-2 text-center cursor-pointer">
//                         <i class="fa-solid fa-house-laptop fa-4x"></i>
//                         <h3>${allData[i].strArea}</h3>
//                 </div>
                  
//                 </div>
//         </div>
        
        
//         `
//     }
// rowData.innerHTML=box;
// }
////

var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s")
myHttp.send();

myHttp.addEventListener("load" ,function(){
if (myHttp.status >= 200 && myHttp.status < 300){
     allData= JSON.parse(myHttp.responseText).meals;

    //  displayall();
    displayMain();

    // console.log(allData);
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
rowData.innerHTML=box;

}






// ingredins

// var myHttp = new XMLHttpRequest();
// myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list")
// myHttp.send();

// myHttp.addEventListener("load" ,function(){
// if (myHttp.status >= 200 && myHttp.status < 300){
//      allData= JSON.parse(myHttp.responseText).meals;

//     //  displayall();
//     displayIngrdins();

// //  console.log( myHttp.response);
//     console.log(allData);
// }

// })

// function displayIngrdins(){

//   let box=" ";
    
//     for (let i= 0 ;  i < allData.length ; i++){

//         box += `   
        
//      <div class="col-md-3">
//                 <div onclick="getMealDetails('53133')" class="meal p rounded-2 cursor-pointer">
//                     <img class="w-100" src="${allData[i].strThumb}" alt="" srcset="">
//                     <div class=" text-center text-white p-2">
//                         <h3>${allData[i].strIngredient}</h3>
//                         <p> ${allData[i].strDescription}</p>
//                     </div>
//                 </div>
//         </div>
        
        
//         `
//     }
// rowData.innerHTML=box;
// }



////==========opening  Navbra============

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