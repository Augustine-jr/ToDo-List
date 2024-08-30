const todoList = [{
  name: 'make dinner', 
  dueDate: '24/08/2024'
}, {
  name: 'wash dishes', 
  dueDate: '29/08/2024'
}, {
  name: 'feed the dog',
  dueDate: '30/08/2024'}]; // Create array to store todos,i'm grouping the name the due date together using an object

/*For Pratice 2 if we click something in the text box
and click add it will display it on page instead of the console as in pratice 2*/

/*Steps (Algorithm)
1. Loop through the Array
2. Create some HTML code for each todo
3. put the html on the web page*/

// Render function
 renderTodoList()

 /*const renderTodoList = () => {
 };*/
function renderTodoList() { // i left this on a regular function syntax because it is easier to read and Hoisting(which means we can call this function before we create it)


      let todoListHTML = '';

      // Loop through the array and generate HTML for each todo
      // The destructuring syntax allows us to access properties of an object directly, without using the dot notation (e.g., todoObject.name)
      // this bellow is the for each  method of looping through an array
      todoList.forEach((todoObject, index) => {  // used arrow function here because we are passing a function inside another function
        const { name, dueDate } = todoObject; //This is callled destructuring
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button class="delete-todo-button js-delete-button">Delete</button>
        `; // this technique is called generating the HTML
        todoListHTML += html; // Add the HTML to the todoListHTML
      });

      //this below is the for loop method of looping through an array
      /*for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
       //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //This is callled destructuring
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList(); 
          " class="delete-todo-button">Delete</button>
        `; // this technique is called generating the HTML
        todoListHTML += html; // Add the HTML to the todoListHTML
      }*/


      document.querySelector('.js-todo-list').innerHTML = todoListHTML; // Display the todoListHTML in the webpage

/*below we used querySelectorAll to get a list of all the delete butoon on the page
  and then we looped through the list using forEach()
  and for each delete button we added a 'click' eventlistener
  and ran the same code that we did before.
*/ 
      document.querySelectorAll('.js-delete-button')
       .forEach((deleteButton, index) => {
          deleteButton.addEventListener('click', () => {
            //console.log(index); //outputs 0, even tho the index gets deleted down right away, if we click one of deleted button later on it still has access to index, this is called a closure
            todoList.splice(index, 1); // Remove the todo from the array
            renderTodoList(); // Update the webpage to display the remaining todos
          });
       });

}     



   document.querySelector('.js-add-button')
   .addEventListener('click', () => {
    addTodo(); // Call the function when we click "Add"
  }); // Add event listener to the "Add" button

function addTodo() {  // When we click "Add",
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;  //  Get text from textbox *the .value property represents the text in the textbox

  const inputDateElement = document.querySelector('.js-due-date-input');
  const dueDate = inputDateElement.value; //  Get text from textbox *the.value property represents the text in the textbox
  

  todoList.push({
   // name: name,
    //dueDate: dueDate,
    name,
    dueDate}); // Add name variable to array .push() will add a value to the end of the array

  inputElement.value = ''; // this will make the text in the textbox become empty when we click add
  renderTodoList(); // Update the webpage to display the new todo
}





