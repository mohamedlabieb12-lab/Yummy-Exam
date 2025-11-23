let rowData = document.getElementById("rowData");
let rowData3 = document.getElementById("rowData3");

let searchContainer = document.getElementById("searchContainer");
let submitBtn;
let allData=[];
// ==============================================--------------=========

var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list")
myHttp.send();

myHttp.addEventListener("load" ,function(){
if (myHttp.status >= 200 && myHttp.status < 300){
     allData= JSON.parse(myHttp.responseText).meals;

    //  displayall();
    displayIngrdins();

//  console.log( myHttp.response);
    console.log(allData);
}

})

function displayIngrdins(){

  let box=" ";
    
    for (let i= 0 ;  i < 20 ; i++){

        box += `   
        
     <div class="col-md-3">
                <div  class="meal p rounded-2 cursor-pointer">
                    <img class="w-100" src="${allData[i].strThumb}" alt="" srcset="">
                    <div class=" text-center text-white p-2">
                        <h3>${allData[i].strIngredient}</h3>
                      <p>${allData[i].strDescription.split(" ").slice(0, 25).join(" ")} </p>
                </div>
        </div>
        
       </div> 
        `
    }
rowData3.innerHTML=box;
}

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