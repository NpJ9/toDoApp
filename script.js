let addButton = document.getElementById("add");
const itemContainer = document.getElementById("container");
const textInput  = document.getElementById("input");
const reset = document.getElementById("reset");

// Need to add load function to arguement
document.addEventListener('DOMContentLoaded', loadTodos());

addButton.addEventListener('click' , addNew);

function addNew() {
    let textVal = textInput.value;
    if (textVal === "") return; // Don't add empty todo

    // Create new Div
    const newDiv = document.createElement("div");
    newDiv.className ="todo";

    // Create new Input
    const newInput = document.createElement("input");
    newInput.className ="text";
    newInput.value = textVal;
    newInput.disabled = true; // Make it read only

    // Create remove Button
    const removeButton = document.createElement("button");
    removeButton.className ="add";
    removeButton.classList.add("removeRed");

    // Remove current clicked ToDo
    removeButton.addEventListener("click", () => {
        itemContainer.removeChild(newDiv);
        removeTodos(newInput.value); // Remove from localStorage
        console.log("Removed a todo item");
    });

    // Add toDo to list
    newDiv.appendChild(newInput);
    newDiv.appendChild(removeButton);

    // Saves text for Todo
    saveTodos(textVal);
    
    itemContainer.appendChild(newDiv);
    
    textInput.value = "";

    // Removes all added Todos
    reset.addEventListener('click' , () =>{
        if (document.body.contains(newDiv)){
            itemContainer.removeChild(newDiv);
            localStorage.clear('todos'); // Removes all todos from local storage
        }
    });
};

// Saves/Removes/Loads ToDos from local storage

function saveTodos(todoText) {
    let todos =  JSON.parse(localStorage.getItem('todos')) || []; 
    todos.push(todoText); // Add new toDo to text
    localStorage.setItem('todos', JSON.stringify(todos)); // Save toDo list
}

function removeTodos(todoText){
    let todos =  JSON.parse(localStorage.getItem('todos')) || []; 
    todos = todos.filter(todo => todo !== todoText); // Filters out todos that have been added and removed 
    localStorage.setItem('todos', JSON.stringify(todos)); // Save updated list
}

// let todos =  JSON.parse(localStorage.getItem('todos')) || [];  Ensures that there will always be an array when there are no todos saved

function loadTodos(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || []; 
    todos.forEach(todo => {
        const newDiv = document.createElement("div");
        newDiv.className ="todo";
    
        // Create new Input
        const newInput = document.createElement("input");
        newInput.className ="text";
        newInput.value = todo;
        newInput.disabled = true; // Make it read only
    
        // Create remove Button
        const removeButton = document.createElement("button");
        removeButton.className ="add";
        removeButton.classList.add("removeRed");
    
        // Remove current clicked ToDo
        removeButton.addEventListener("click", () => {
        itemContainer.removeChild(newDiv);
        removeTodos(newInput.value); // Remove from localStorage
        console.log("Removed a todo item");
        });

        // Add toDo to list
        newDiv.appendChild(newInput);
        newDiv.appendChild(removeButton);
    
        // Saves text for Todo

        itemContainer.appendChild(newDiv);
    });
};

// Enter key used to add
addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addNew();
    }
});
