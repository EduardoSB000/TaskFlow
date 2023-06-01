console.log("TaskFlow");

function Enviar() {
  const List = document.getElementById('Ul');
  const newContainer = document.createElement('div');
  const newTask = document.createElement('h6');
  const newRadio = document.createElement('input');
  const Task = document.getElementById('Task').value;
  
  newRadio.type = 'radio';
  newTask.innerText = Task;
  newTask.style.fontFamily = 'Arial';
  
  newContainer.appendChild(newRadio);
  newContainer.appendChild(newTask);
  List.appendChild(newContainer);
}
