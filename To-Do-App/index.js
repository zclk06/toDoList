const inputToDo = document.querySelector('.inputToDo');
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoLists");
const checkedList = document.querySelector('.form-check-input');
const checkBox = "";
const text = "";
let totalItem = 0;
let finishedItem = 0;

const displaySection = document.getElementById("display");

addBtn.onclick = function () {
  if (!inputToDo.value) {
    alert('Please enter anything');
  } else {
    toDoList.innerHTML += `<div class="row toDoItem">
    <div class="col-1">
        <input class="form-check-input me-2 toDoInput" type="checkbox" value="item">
    </div>
    <div class="col-10">
        <p class="label">${inputToDo.value}</p>
    </div>
    <div class="col-1">
        <button type="button" class="btn btn-info delBtn"> <i class="fa-solid fa-eraser"></i></button>
    </div>
    <div>`;
    totalItem +=1;
    inputToDo.value = '';
    
    display();
  }
};


toDoList.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('toDoInput')) {
   
    if(e.target.checked === true){
      e.target.parentElement.nextElementSibling.firstElementChild.style.textDecoration = "line-through";
      finishedItem +=1;
  } else 
  {
    e.target.parentElement.nextElementSibling.firstElementChild.style.textDecoration = "none";
    finishedItem -=1;
  }
  }
  if(e.target.classList.contains("delBtn")){
    if(e.target.parentElement.parentElement.firstElementChild.firstElementChild.checked === true){
      e.target.parentElement.parentElement.remove();
      totalItem -=1;
      finishedItem -=1;
    }else{
      e.target.parentElement.parentElement.remove();
      totalItem -=1;
    }
    
   
    
   
   

  }

  display();
});









  function display(){
    
    displaySection.innerHTML =`<div class="card-footer bg-transparent border-success">
    You finished ${finishedItem} task(s) from  ${totalItem} task(s) 
    </div>`
    //  "You have "+totalItem+ " task(s) \n" + "You finished "+finishedItem+" tasks";
    
  }


  


