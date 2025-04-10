import { formulas } from "./formulas.js";
import { tasks } from "./tasks.js";


let back=document.getElementById("back")
back.style.opacity=0
let button=document.getElementsByClassName("start")[0]
let welcome=document.getElementsByClassName("welcome")[0]
let game=document.getElementsByClassName("game")[0]
button.onclick=function(event){
    welcome.style.opacity=0
    back.style.opacity=1
    setTimeout(function(){
        game.style.opacity=1
        welcome.style.display="none"
    },600)
}
back.onclick=function(event){
    back.style.opacity=0
    welcome.style.opacity=1
    setTimeout(function(){
        welcome.style.opacity=1
        welcome.style.display="block"
        game.style.display="none"
    },600)
    
}
// console.log(formulas[0]


