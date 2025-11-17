const year = document.getElementById("year");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);
console.log(year);
year.textContent = currentYear;
