const todoList = ['make dinner', 'wash dishes', 'feed the dog']; // Create array to store todos

/*For Pratice 2 if we click something in the text box
and click add it will display it on page instead of the console as in pratice 2*/

/*Steps (Algorithm)
1. Loop through the Array
2. Create some HTML code for each todo
3. put the html on the web page*/

// Render function
 renderTodoList()
function renderTodoList() {

      let todoListHTML = '';

      for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`; // this technique is called generating the HTML
        todoListHTML += html; // Add the HTML to the todoListHTML
      }

      console.log(todoListHTML);

      document.querySelector('.js-todo-list').innerHTML = todoListHTML; // Display the todoListHTML in the webpage
}

function addTodo() {  // When we click "Add",
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;  //  Get text from textbox *the .value property represents the text in the textbox
  

  todoList.push(name); // Add name variable to array .push() will add a value to the end of the array
  console.log(todoList); // console.log the array

  inputElement.value = ''; // this will make the text in the textbox become empty when we click add
  renderTodoList(); // Update the webpage to display the new todo
}





