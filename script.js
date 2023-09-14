function addTask() {
    var taskInput = document.getElementById('task');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        }

        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}
