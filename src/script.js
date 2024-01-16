console.log("Hello");

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

const whatDate = () => {
    let todaysDate = new Date();
    todaysDate.toLocaleDateString;
    console.log(todaysDate)
}
whatDate()
