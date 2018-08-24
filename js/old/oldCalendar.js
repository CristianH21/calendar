window.onload = function(){
  document.querySelector("#prev").addEventListener("click",function(){prev()});
  document.querySelector("#next").addEventListener("click",function(){next()});
  document.querySelector("#today").addEventListener("click",function(){todaysMonth()});
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  console.log(months[currentMonth]);

  showCalendar(currentMonth,currentYear);

  function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
  }

  function prev() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
  }

  function todaysMonth(){
    let today = new Date();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();
    showCalendar(todayMonth,todayYear);
  }

  function showCalendar(month,year){
    let firstDay = (new Date(year,month)).getDay();
    let prevMonth = month - 1;
    let prevMonthDays = daysInMonth(prevMonth, year);
    let fecha = document.querySelector(".fecha");
    fecha.innerHTML = months[month]+ ", "+year;
    //body of the table
    let tbl = document.querySelector("#calendar-body");

    //add blankspace
    tbl.innerHTML = "";
    console.log("days in month: "+daysInMonth(month,year));
    console.log("start of day: "+firstDay);
    console.log("Prev Month Days: "+prevMonthDays);
    //creating all cells
    let date = 1;
    let prevDate = prevMonthDays - (firstDay-1);
    let nextDate = 1;

    console.log("Prev Month start date: "+prevDate);
    for(let i = 0; i < 6; i++){
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for(let j = 0; j < 7; j++){
        if(i === 0 && j < firstDay){
          let cell = document.createElement("td");
          let cellText = document.createTextNode(prevDate);
          cell.setAttribute('class', 'prev-month');
          cell.appendChild(cellText);
          row.appendChild(cell);
          prevDate++;
        }else if(date > daysInMonth(month,year)){
          let cell = document.createElement("td");
          let cellText = document.createTextNode(nextDate);
          cell.setAttribute('class', 'next-month');
          cell.appendChild(cellText);
          row.appendChild(cell);
          nextDate++;
        }else{
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date);
          cell.setAttribute('class', 'this-month');
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tbl.appendChild(row);
    }
  }

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
};
