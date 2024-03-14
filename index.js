const formSubmit = document.querySelector("form#create-task-form")
const newTask = document.getElementById("new-task-description")


formSubmit.addEventListener("submit", event => {
    event.preventDefault()
    const list = document.getElementById("tasks")
    const task = document.createElement("li")
    task.textContent = newTask.value
    const priorityValue = event.target.querySelector("#priority").value
    // switch (priorityValue){
    //     case "High":
    //         task.fontcolor("red")
    //         break
    //     case "Medium":
    //         task.fontcolor("yellow")
    //         break
    //     case "Low":
    //         task.fontcolor("green")
    //         break
    // }
    list.append(task)
    const removeButton = document.createElement("button")
    removeButton.textContent = "X"
    task.append(removeButton)
    removeButton.addEventListener("click", event => {
        task.remove()
    })
})