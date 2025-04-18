import { formulas } from "./formulas.js";
import { tasks } from "./tasks.js";


let back = document.getElementById("back")
let button = document.getElementsByClassName("start")[0]
let welcome = document.getElementsByClassName("welcome")[0]
let learn = document.getElementsByClassName("learn")[0]
let formulaList = document.getElementById("formulaList")
let next = document.getElementById("next")
let game = document.getElementsByClassName("game")[0]
let check = document.getElementById("check")
let taskCounter=0
let left_h2 = document.createElement("h2")
let input = document.createElement("input")
let right_h2 = document.createElement("h2")
let h2 = document.getElementById("wrong")
for (let index = 0; index < formulas.length; index++) {
    let p = document.createElement("p")
    p.innerHTML = formulas[index]
    formulaList.appendChild(p)
    
}
button.onclick = function (event) {
    welcome.style.opacity = 0
    setTimeout(function () {
        learn.style.opacity = 1
        learn.style.display = "block"
        welcome.style.display = "none"
    }, 600)
}
back.onclick = function (event) {
    learn.style.opacity = 0
    setTimeout(function () {
        welcome.style.display = "block"
        learn.style.display = "none"
        setTimeout(function () {
            
            welcome.style.opacity = 1
        }, 100)
    }, 600)
    
}
next.onclick = function (event) {
    task.appendChild(left_h2)
    task.appendChild(input)
    task.appendChild(right_h2)
    
    getFormula()
    learn.style.opacity = 0
    
    setTimeout(() => {
        learn.style.display = "none"
        game.style.display = "block"
        setTimeout(() => {

            game.style.opacity = 1
        }, 100);
    }, 600);
}
check.onclick=function (event) {
    let userFormula = left_h2.innerHTML+input.value+right_h2.innerHTML
    console.log(userFormula)
    if (formulas[taskCounter].split(" — ")[0]==userFormula) {
        taskCounter++
        if (taskCounter==tasks.length) {
            h2.innerHTML="молодец! Вы опытный смешарик"
            h2.style.color="red"
            check.disabled=true
        }
        else{
            getFormula()
            h2.innerHTML=""

        }


        input.value=""

    }
    else{
     h2.innerHTML="ошибка,попробуй еще раз"
    }
}

function getFormula(){
    let leftContent=tasks[taskCounter].split("...")[0]
    let rightContent=tasks[taskCounter].split("...")[1]
    
    left_h2.innerHTML = leftContent
    right_h2.innerHTML = rightContent
}
sqare.onclick=function(event){
    input.value=input.value+"²"
}
three.onclick=function(event){
    input.value=input.value+"³"
}
four.onclick=function(event){
    input.value=input.value+"⁴"
}
