let new_task = document.getElementById("new-task");
let tasks = document.getElementById("tasks");

// --------------------------------------------------------------------------------------------------

function add_task() {

    if (new_task.value === "") {

        alert("Please Add A Task!");

    }

    else {

        let task = document.createElement("p");
        task.id = "task";

        let span = document.createElement("span");
        span.innerText = new_task.value;
        span.id = "span";

        let delete_btn = document.createElement("button");
        delete_btn.innerText = "Delete";
        delete_btn.id = "delete";

        tasks.appendChild(task);
        task.appendChild(span);
        task.appendChild(delete_btn);

        new_task.value = "";

        delete_btn.addEventListener("click", () => {

            task.remove();

        })

    }

}