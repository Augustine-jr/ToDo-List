const todoList = []; // Create array to store todos

function addTodo() {  // When we click "Add",
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;  //  Get text from textbox *the .value property represents the text in the textbox
  

  todoList.push(name); // Add name variable to array .push() will add a value to the end of the array
  console.log(todoList); // console.log the array

  inputElement.value = ''; // this will make the text in the textbox become empty when we click add
}