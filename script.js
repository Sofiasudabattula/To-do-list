// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add new task
    addTaskBtn.addEventListener('click', addTask);

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        // Event listener for checkbox to toggle completion
        li.querySelector('input[type="checkbox"]').addEventListener('click', toggleComplete);

        // Event listener for delete button
        li.querySelector('.deleteBtn').addEventListener('click', deleteTask);
    }

    // Toggle task completion
    function toggleComplete(event) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle('completed');
    }

    // Delete task
    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});
