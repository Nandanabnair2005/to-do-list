const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}
