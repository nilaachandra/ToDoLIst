console.log("Hello");
//function to take Username
// const nameInput = () => {
//   const name = document.getElementById("name");
//   let userName = prompt("Enter Your Name!");
//   console.log(userName);
//   name.innerHTML = userName;
// };
// nameInput();

//function to print Current Day of the week
const currentDay = () => {
  let currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = currentDate.getDay();
  let today = days[dayIndex];
  const weekday = document.getElementById("weekday");
  weekday.innerHTML = today;
  console.log(today);
};
currentDay();

//function to print Current date
const whatDate = () => {
  let todaysDate = new Date();
  const dd = document.getElementById("dd");
  const mm = document.getElementById("mm");
  const yyyy = document.getElementById("yyyy");
  dd.innerHTML = todaysDate.getDate();
  mm.innerHTML = "0" + (todaysDate.getMonth() + 1);
  yyyy.innerHTML = todaysDate.getFullYear();
  console.log(todaysDate.getDate());
};
whatDate();

const addIcon = document.getElementById("addIcon");
const addTodoContainer = document.getElementById("addTodoContainer");

addIcon.addEventListener(
  "click",
  (revealAdder = () => {
    addTodoContainer.classList.toggle("h-min");
  })
);

//adding todos
let todos = ['Procastinate Whole Day'];
const todoContainer = document.getElementById("todoContainer");
const todoInput = document.getElementById('todoInput');
const todoAdder = document.getElementById('submit');


const addATodo = (e) => { 
  e.preventDefault() //prevents the page from refreshing after a add button is being clicked
  console.log("dfdfdfd")
}

todoAdder.addEventListener('click', addATodo)

const getTodos = () => {
  todos.forEach((todo, i) => {
    let newHTML = 
    `<div
        class="todos justify-between items-center w-full border border-solid
       border-black rounded-sm p-4 flex flex-col md:flex md:flex-row ">
      <div class="w-2/3">
        <input type="text" value="${i+1}.${todo}" readonly class="w-full text-black font-bold" id="todoEdit">
      </div>
        <div class="flex gap-4">
          <i class="ri-edit-fill text-2xl cursor-pointer text-blue-500"></i>
          <i class="ri-delete-bin-6-fill text-2xl cursor-pointer text-red-700"></i>
          <i class="ri-check-double-fill text-2xl cursor-pointer text-green-700"></i>
        </div>
    </div>`;

todoContainer.innerHTML = newHTML

  });
};
getTodos()