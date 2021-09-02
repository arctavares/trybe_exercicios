document.querySelector("body").style.backgroundColor = "black";

let background1 = document.getElementsByClassName("emergency-tasks")[0];
background1.style.backgroundColor = "orange";

let background2 = document.getElementsByClassName("no-emergency-tasks")[0];
background2.style.backgroundColor = "yellow";

let divH3 = document.querySelectorAll("section div h3");
for(let i = 0; i < divH3.length; i += 1){
    document.querySelectorAll("section div h3")[i].style.backgroundColor = "grey";
}


document.querySelector("footer div").style.backgroundColor = "grey";
document.querySelector("header").style.backgroundColor = "grey";    

