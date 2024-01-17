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

const addIcon = document.getElementById('addIcon');
const addTodoContainer = document.getElementById('addTodoContainer');


addIcon.addEventListener('click',revealAdder = () => {
  addTodoContainer.style.height = '6rem';
  console.log('dfd')
})