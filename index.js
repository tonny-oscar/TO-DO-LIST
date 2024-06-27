function addTask() {
    // Prompt me to add a task first
    var task = prompt("Enter a task:");
    
  if (task) {
    // code to create a list of elements
    var li = document.createElement("li");
    li.textContent = task;
    li.className = "task-item";

    // placing the new task to the task list
    document.getElementById("taskList").appendChild(li);
 }
}