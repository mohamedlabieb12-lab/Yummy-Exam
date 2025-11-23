let rowData = document.getElementById("rowData");
let rowData4 = document.getElementById("rowData4");

let searchContainer = document.getElementById("searchContainer");
let submitBtn;
let allData=[];
// =========================================category=====--------------=========



var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?a=list")
myHttp.send();

myHttp.addEventListener("load" ,function(){
if (myHttp.status >= 200 && myHttp.status < 300){
     allData= JSON.parse(myHttp.responseText).meals;

    //  displayall();
    displayarea();

//  console.log( myHttp.response);
    // console.log(allData);
}

})

function displayarea(){

  let box=" ";
    
    for (let i= 0 ;  i < allData.length ; i++){

        box += `   
        
         <div class="col-md-3">
                <div onclick="getMealDetails('53133')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <div  class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${allData[i].strArea}</h3>
                </div>
                  
                </div>
        </div>
        
        
        `
    }
rowData4.innerHTML=box;
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