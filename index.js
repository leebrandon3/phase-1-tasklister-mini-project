const formSubmit = document.querySelector("form#create-task-form")
const newTask = document.getElementById("new-task-description")
const dueDate = document.getElementById("new-task-due-date")

formSubmit.addEventListener("submit", event => {
    event.preventDefault()
    // Grabs input text and creates a task list
    const list = document.getElementById("tasks")
    const task = document.createElement("li")
    console.log(dueDate.value)
    if (dueDate != null) {
        task.textContent = `${newTask.value} due on ${dueDate.value}`
    }
    else{
        task.textContent = `${newTask.value}`
    }

    task.setAttribute("contenteditable", "true")
    
    // Updates color based on priority value
    const priorityValue = event.target.querySelector("#priority").value
    switch (priorityValue){
        case "High":
            task.style.color = "red"
            break
        case "Medium":
            task.style.color = "yellow"
            break
        case "Low":
            task.style.color = "green"
            break
    }
    list.append(task)

    // Creates a remove button
    const removeButton = document.createElement("button")
    removeButton.textContent = "completed"
    task.append(removeButton)
    // On the event that the button was pressed deletes the entire item off list
    removeButton.addEventListener("click", event => {
        task.remove()
    })
})