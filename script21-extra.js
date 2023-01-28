"use strict" 

// Створіть об‘єкт зі списком задач, де ключ - ім‘я того, хто додає задачу, значення - ще один об‘єкт, який містить у собі 2 пари ключ-значення: статус і текст задачі. Додайте декілька prompt, щоб дати можливість користувачу додавати задачі в об‘єкт. 
// Приклад об‘єкту:

const tasks = {
    Anna: {
      status: 'new',
      text: 'Create checkout page'
    }, 
    Ihor: {
      status: 'done',
      text: 'Add styles to header'
    } 
  }
  let newTaskForUser;
  let newStatus;
  let newText;
  let a;
  let newName = prompt ("Enter name", "Name");
  while (!isNaN(newName) || newName === 0) {
    newName  = prompt ("Your name is incorect, please enter corect Name" , "Name");
  } 
  while (tasks.hasOwnProperty(newName)) {
    newName = prompt ("A person with this name is already busy with work, add a new employee ", "Olga");
    console.log(newName);
  }
  newStatus =  prompt ("The task is new (new) or already completed (done) ? ", "new");
  newText =  prompt ("What should be done ? ", "Make header");
  tasks [newName] = {status: newStatus, text: newText,};
  
  a = confirm ('обновим задачу сотруднику?');
   if (a === true) {
    newTaskForUser = prompt ("Enter name Old user", "Anna");
    if (tasks.hasOwnProperty(newTaskForUser)) {
      tasks [newTaskForUser].status= prompt ("Тут можно обновить статус уже существующиму сотруднику" , "done");
      tasks [newTaskForUser].text= prompt ("Тут можно можно указать новую задачу уже существующиму сотруднику" , "сделать футер");
    }
  } else {
    alert ('сотрудника с таким именем нет')

  }
  console.log(tasks);



