//DOM Variables
const enterBtn = document.getElementById("enter");
const textInput = document.getElementById("new-todo");
const toDoList = document.getElementById("list");
const dateButton = document.getElementById("date-button");
const date = document.getElementById("todays-date");

//Enter Button Add Event Listener.
enterBtn.addEventListener("click", () => {
    console.log("Button Clicked")
    //Grab Input and Creates Li Element.
    const newItem = document.createElement("li");
    //Attatches Input to Existing List
    newItem.innerText = textInput.value;
    //Create Delete Button
    const newItemButton = document.createElement("button");
    newItemButton.innerText = "delete";
    newItem.appendChild(newItemButton);
    //Delete Functionality
    toDoList.appendChild(newItem);
    newItemButton.addEventListener("click", (event) => {
    const itemToRemove = event.target.parentNode;
    toDoList.removeChild(itemToRemove);
    });
});
    //Date Button
dateButton.addEventListener("click",()=>{
    date.innerText = Date();
})




