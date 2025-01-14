let addButton = document.getElementById("add");
const itemContainer = document.getElementById("container");
const textInput  = document.getElementById("input");
const reset = document.getElementById("reset");

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
        console.log("Removed a todo item");
    });

    // Add toDo to list
    
    newDiv.appendChild(newInput);
    newDiv.appendChild(removeButton);
    
    itemContainer.appendChild(newDiv);
    
    textInput.value = "";



    reset.addEventListener('click' , () =>{
        // If the Div contains a button with remove element then remove all of these
        console.log("reset");
    
        if (document.body.contains(newDiv)){
            console.log("There is a new DIV");
            itemContainer.removeChild(newDiv);
        }
    
    });

}

// FIX

// reset.addEventListener('click' , () =>{
//     // If the Div contains a button with remove element then remove all of these
//     console.log("reset");

//     if (document.body.contains(newDiv)){
//         console.log("There is a new DIV")
//     }

// });

// Enter key used to add

addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addNew();
    }
});

