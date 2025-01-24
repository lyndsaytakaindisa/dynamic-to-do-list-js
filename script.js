//ensuring that the code runs after the HTML document has fully loaded 
document.addEventListener('DOMContentLoaded', function(){
    //selection of DOM elements 
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList  = document.getElementById('task-list');

    //creation of the addTask Function 
    function addTask(){
        let taskText = taskInput.value.trim();
        if (taskText === ""){
            alert("Please enter a task!!");
        }
        else{
            //creation of task and removal
            const li_element = document.createElement('li');
            //setting the textContent to taskText
            li_element.textContent = taskText;
            //creation of new button element for removing the task 
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.className = 'remove-btn';
            //event to the remove button to remove task when triggered 
            remove.addEventListener('click', function(){
                taskList.removeChild(li_element);
            });
            //appending the remove button to the li 
            li_element.appendChild(remove);
            taskList.appendChild(li_element);
            //clearing the input field 
            taskInput.value = "";
        }
    }

    //adding an event listener to the addButton 
    addButton.addEventListener('click', addTask);
    //adding an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            addTask();
        }
    });
});