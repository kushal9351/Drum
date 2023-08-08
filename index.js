// function add(a, b){
//     return a+b;
// }
// function multiply(a, b){
//     return a*b;
// }
// function divide(a, b){
//     return a/b;
// }
// function subtract(a, b){
//     return a+b;
// }

// function calculator(a, b, operator){
//     return operator(a, b);
// }


// document.querySelector("button").addEventListener("click", clicked);

// for(var i=0; i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         alert("I got clicked");
//     });
// }



// OBJECTS 

// let student = {
//     name : "harry",
//     class : "2 year",
//     branch : "Infomation technology",
//     age : 20
// };

// function BellBoy(name, qualification, yearsOfExperience, cleaningRepertoire){
//     this.name = name;
//     this.qualification = qualification;
//     this.yearsOfExperience = yearsOfExperience;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = fuction (){
//      alert("cleaning in progress...");
//}
// }

// var bellBoy1 = new BellBoy("harry", "BBA", 55, ["bathroom", "Lobby", "bedroom"]);
// console.log(bellBoy1.clean());




for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        let btn = this.innerHTML;
        makeSound(btn);
        buttonAnimation(btn);
    })
}


document.addEventListener("keypress", function (event){
    
    let key = event.key;
    makeSound(key);
    buttonAnimation(key);
    
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Enter given keys");
    }
}


function buttonAnimation(key){
    let activeBtn = document.querySelector("." + key);

    activeBtn.classList.add("pressed");

    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    }, 100)
}





