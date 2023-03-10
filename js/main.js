"use strict"

const homePage = document.getElementById('home-page');
const taskPage = document.getElementById('task-page');
const taskList = document.querySelector('.task');

const startBtn = document.getElementById('start-btn');
const home = document.querySelector('.fa-house');


const emptyText =  `<h3 id="emptyList" style="text-align: center;">Empty!</h3>`;
const countElement = document.querySelector('.count');

// Homepage function 

(function homeFunction(){
    startBtn.onclick=()=>{
        homePage.classList.add('d-none');
        taskPage.classList.remove('d-none');

        if(taskList.innerText == ""){
            taskList.innerHTML = emptyText;  
        }
    
    }
    
    home.onclick = ()=>{
        homePage.classList.remove('d-none');
        taskPage.classList.add('d-none');
        popUp.classList.add('pop-up-hidden');
        taskInput.value= "";
    }
  
})();


// popup box variables
const popUp = document.querySelector('.add-task');
const plus = document.querySelector('.fa-plus');
const popupCancel = document.getElementById('cancel');
const taskAdd = document.getElementById('add');
const taskInput = document.getElementById('taskInput');

// popup box function

(function popupBox(){
    popUp.classList.add('pop-up-hidden')
    plus.onclick = ()=>{
        popUp.classList.remove('pop-up-hidden');
    }
    popupCancel.onclick = ()=>{
        popUp.classList.add('pop-up-hidden');
        taskInput.value= "";
    }
})();

let count = '';
const addingPopup = document.querySelector('.addingPopup');

let slideTextOne = "Task added!";
let slideTextTwo = "Task completed!";
let slideTextThree = "Task deleted!";


// Adding task to the task list

taskAdd.onclick = ()=>{
    const checkBox = `<input type="checkbox" class="checkbox" onclick="removeTask(this, this.parentElement)">`;

    if(taskInput.value !== ""){
        let inputValue = taskInput.value;
        let createTaskElemnt = document.createElement('p');
        count++;
        countElement.textContent = count;
        if(taskList.firstChild.id == 'emptyList'){
            taskList.removeChild(taskList.firstChild);
        }

        slidePopup(slideTextOne,addingPopup);

        createTaskElemnt.innerHTML = checkBox + inputValue;
        taskList.appendChild(createTaskElemnt);
        popUp.classList.add('pop-up-hidden');
        taskInput.value= "";  
     
    }else{
        alert("Empty value can't be added!")
    }   
}


// sliding popup text function 

function slidePopup(text,varPop){
    varPop.innerHTML = text;
    varPop.style.transform = "translateX(0px)";
    setTimeout(()=>{
        varPop.style.transform = "translateX(80px)";
        setTimeout(()=>{
            varPop.innerHTML = "";
            varPop.style.transform = "translateX(-106px)";
        },100)
    },700)
}



// remove task form the task list

function removeTask(inputBox, taskElement){
    let item = taskElement;
  
    if(inputBox.checked == true){
            count--
            countElement.textContent = count;
            taskList.removeChild(inputBox.parentElement);
            item.removeChild(item.firstChild);
            slidePopup(slideTextTwo,addingPopup);
            completeTask(item);
    }
    
    if(taskList.innerHTML == ""){
        taskList.innerHTML = emptyText;
    }
}

// complete page variables 

const complete_page = document.querySelector('.complete_page');
const doneIcon = document.querySelector('.fa-list-check');
const doneHome = document.querySelector('.d-home');
const doneList = document.getElementById('done_list');

// displaying the complete page function

(function donePage(){
    doneList.innerHTML = emptyText;
    doneIcon.onclick = ()=>{
        complete_page.classList.remove('d-none');
        taskPage.classList.add('d-none');
        homePage.classList.add('d-none');
        popUp.classList.add('pop-up-hidden');
    }
    doneHome.onclick = ()=>{
        complete_page.classList.add('d-none');
        homePage.classList.remove('d-none');
    }
  
})();

// move task to the completed page
function completeTask(item){
    const delBtn =   `<button onclick= "completedTask(this.parentElement)">X</button>`;
    const itemText = item.innerText;
    item.innerHTML = itemText + delBtn;
    doneList.appendChild(item);
    if(doneList.firstChild.id == 'emptyList'){
        doneList.removeChild(doneList.firstChild);
    }
    
}

const donePopup = document.querySelector('.complete_page .addingPopup');


// delete completed task from the task list

function completedTask(parentElement){
    doneList.removeChild(parentElement);
    slidePopup(slideTextThree,donePopup);

    if(doneList.innerText == "" ){
        doneList.innerHTML = emptyText;
    }
    
}


const donePlus = document.querySelector('.complete_page .icon .icon-list .fa-plus');


donePlus.onclick = ()=>{
    complete_page.classList.add('d-none');
    taskPage.classList.remove('d-none');
    setTimeout(()=>{
        popUp.classList.remove('pop-up-hidden');

    },100)
}
