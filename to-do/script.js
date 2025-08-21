const taskInput = document.querySelector('.task-input input');
const taskList = document.querySelector('#taskList')

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
})

function addTask(taskText) {
    // Create a task row
    const taskRow = document.createElement('div');
    taskRow.className = 'task flex items-center justify-between text-black bg-yellow-400 w-full h-[60px] px-4 rounded-b-lg font-[cursive] mt-2';
  
    // Task text
    const taskName = document.createElement('span');
    taskName.textContent = taskText;
    taskName.className = 'truncate';
  
    // Icons container
    const icons = document.createElement('div');
    icons.className = 'flex gap-4';
  
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fas fa-check cursor-pointer';
  
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash cursor-pointer';
  
    // Add event listeners
    checkIcon.addEventListener('click', () => {
      taskName.classList.toggle('line-through');
      taskName.classList.toggle('text-gray-500');
      checkIcon.classList.toggle('checked-icon')
    });
  
    deleteIcon.addEventListener('click', () => {
      taskRow.remove();
    });
  
    // Build the row
    icons.appendChild(checkIcon);
    icons.appendChild(deleteIcon);
    taskRow.appendChild(taskName);
    taskRow.appendChild(icons);
  
    // Add to the task list
    taskList.appendChild(taskRow);
    console.log('task added')
  }