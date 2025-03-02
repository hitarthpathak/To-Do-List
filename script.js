let new_task = document.getElementById("new-task");
let add_task_btn = document.getElementById("add-task-btn");
let tasks_list = document.getElementById("tasks-list");

// --------------------------------------------------------------------------------------------------

function load_tasks() {
    let tasks_collection = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks_list.innerHTML = '';
    tasks_collection.forEach((task, index) => {
        create_task(task, index);
    });
};

// --------------------------------------------------------------------------------------------------

function create_task(task, index) {
    let p = document.createElement('p');
    p.id = "task";
    p.innerHTML = `
        <span id="#span">${task}</span>
        <button id="delete" onclick="delete_task(${index})">Delete</button>
    `;
    tasks_list.appendChild(p);
};

// --------------------------------------------------------------------------------------------------

function add_task() {
    const task = new_task.value.trim();
    if (task) {
        let tasks_collection = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks_collection.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks_collection));
        create_task(task, tasks_collection.length - 1);
        new_task.value = '';
    }
};

// --------------------------------------------------------------------------------------------------

function delete_task(index) {
    let tasks_collection = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks_collection.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks_collection));
    load_tasks();
};

// --------------------------------------------------------------------------------------------------

add_task_btn.addEventListener('click', add_task);

// --------------------------------------------------------------------------------------------------

window.onload = load_tasks;