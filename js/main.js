import ToDoItem from "./todoitem";
import ToDoList from "./todolist";

const toDoList = new ToDoList(); 

// Launch App
document.addEventListener("readystatechange", (event) => 
{
    if(event.target.readyState === "complete") 
    {
        initApp();
    }
});

const initApp = () => 
{
    // Add listeners

    // Procedural
    // load list objects
    refreshThePage();
}

const refreshThePage = () => 
{
    clearListDisplay();
    // renderList();
    // clearItemEntryField();
    // setFocusOnItemEntry();
}

const clearListDisplay = () =>
{
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}