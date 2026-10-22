// let headingEl = document.getElementById("heading");
let headingEl = document.querySelector("#heading");
// let headingEl = document.getElementsByClassName("headingclass");

// headingEl.style.color = "blue";
// // background-color: "lightgray";
// headingEl.style.backgroundColor = "lightgray";
// headingEl.textContent = "qwerty"; //change the content of the heading
// headingEl.innerHTML += "<h2>New Heading</h2>"; //add new heading to the existing heading


let btnEl = document.querySelector("#btn");

// let fun = () =>{
//     headingEl.style.color = "blue";
// }
// btnEl.addEventListener("click", fun);
// btnEl.addEventListener("click", () =>{
//     headingEl.style.color = "blue";
// })

let count = 0
//incremnt the count value and display it in the heading
btnEl.addEventListener("click", () =>{
    count++;
    headingEl.style.color = "blue";
    headingEl.textContent = count; 
})

// decrement the count value and display it in the heading
let btn2El = document.querySelector("#btn2");
btn2El.addEventListener("click", () =>{
    count--;
    headingEl.style.color = "red";
    headingEl.textContent = count; 
})

// reset the count value and display it in the heading
let btn3El = document.querySelector("#btn3");
btn3El.addEventListener("click", () =>{
    count = 0;
    headingEl.style.color = "black";
    headingEl.textContent = count; 
})

// change the background color of the box when clicked
let boxEl = document.querySelector(".box");
boxEl.addEventListener("click", () =>{
    let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let color = "#";
    for(let i=0; i<6; i++){
        let index = Math.floor(Math.random() * 15); // 0-15
        color += arr[index];
    }
    boxEl.style.backgroundColor = color;
})

console.log(headingEl);

console.log("Script loaded successfully.");