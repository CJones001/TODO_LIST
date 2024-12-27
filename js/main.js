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
};

const refreshThePage = () => 
{
    clearListDisplay();
    // renderList();
    // clearItemEntryField();
    // setFocusOnItemEntry();
};

const clearListDisplay = () =>
{
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => 
{
    let child = parentElement.lastElementChild;
    while(child)
    {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = () => 
{
    const list = toDoList.getList();
    list.forEach((item) => 
    {
        buildListItem(item);
    });
};