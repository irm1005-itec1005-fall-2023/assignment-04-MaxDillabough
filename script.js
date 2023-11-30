// Function to create a new task element
function createTaskElement(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
  
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskDiv.remove();
    });
  
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteButton);
  
    return taskDiv;
  }
  
  // Function to handle creating tasks
  function createTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const tasksContainer = document.getElementById('tasksContainer');
      const taskElement = createTaskElement(taskText);
      tasksContainer.appendChild(taskElement);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  // Event listener for create task button
  const createTaskBtn = document.getElementById('createTaskBtn');
  createTaskBtn.addEventListener('click', createTask);
