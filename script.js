// Ensuring that the code runs after the HTML document has fully loaded 
document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList  = document.getElementById('task-list');

    // Function for loading tasks from the local storage 
    function loadTasks(){
        // Retrieving the task list 
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function for saving tasks to local storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Creation of the addTask Function 
    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (taskText === ""){
            alert("Please enter a task!!");
        
        }

        // Creation of task and removal
        const li_element = document.createElement('li');
        // Setting the textContent to taskText
        li_element.textContent = taskText;
        // Creation of new button element for removing the task 
        const remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.className = 'remove-btn';
        // Event to the remove button to remove task when triggered 
        remove.onclick = function(){
            taskList.removeChild(li_element);
            saveTasks();
        };
        // Appending the remove button to the li 
        li_element.appendChild(remove);
        taskList.appendChild(li_element);
        // Clearing the input field 
        taskInput.value = "";

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add event listener to the input field to detect "Enter" keypress
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText); 
        }
    });

    // Load tasks on DOMContentLoaded
    loadTasks();
});