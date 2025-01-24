//ensuring that the code runs after the HTML document has fully loaded 
/*document.addEventListener('DOMContentLoaded', function(){
    //selection of DOM elements 
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList  = document.getElementById('task-list');

    //creation of the addTask Function 
    function addTask()  {
        let taskText = taskInput.value.trim();
        if (taskText === ""){
            alert("Please enter a task!!");
            return;
        }
        
            //creation of task and removal
            const li_element = document.createElement('li');
            //setting the textContent to taskText
            li_element.textContent = taskText;
            //creation of new button element for removing the task 
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.className = 'remove-btn';
            //event to the remove button to remove task when triggered 
            remove.onclick = function(){
                taskList.removeChild(li_element);
            };
            //appending the remove button to the li 
            li_element.append(remove);
            taskList.append(li_element);
            //clearing the input field 
            taskInput.value = "";
        
    }

    //adding an event listener to the addButton 
    addButton.addEventListener('click', addTask);
    //adding an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            addTask();
        }
    });
});*/
// Ensuring that the code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Selection of DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Creation of the addTask function
    function addTask() {
        // Retrieve and trim the value from the input field
        let taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function if input is empty
        }

        // Create a new <li> element
        const liElement = document.createElement('li');
        liElement.textContent = taskText; // Set the task text

        // Create a new "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign a class for styling

        // Add event listener to the "Remove" button
        removeButton.onclick = function () {
            taskList.removeChild(liElement); // Remove the task when the button is clicked
        };

        // Append the remove button to the <li> element
        liElement.append(removeButton);

        // Append the <li> element to the task list
        taskList.append(liElement);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to detect "Enter" keypress
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when "Enter" is pressed
        }
    });
});
