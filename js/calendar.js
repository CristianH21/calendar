window.onload = function(){
  document.querySelector("#prev").addEventListener("click",function(){prev()});
  document.querySelector("#next").addEventListener("click",function(){next()});
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

  function showCalendar(month,year){
    let firstDay = (new Date(year,month)).getDay();
    let fecha = document.querySelector(".fecha");
    fecha.innerHTML = months[month]+ ", "+year;
    //body of the table
    let tbl = document.querySelector("#calendar-body");

    //add blankspace
    tbl.innerHTML = "";
    console.log("days in month: "+daysInMonth(month,year));
    //creating all cells
    let date = 1;
    for(let i = 0; i < 6; i++){
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for(let j = 0; j < 7; j++){
        if(i === 0 && j < firstDay){
          let cell = document.createElement("td");
          let cellText = document.createTextNode("n/a");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }else if(date > daysInMonth(month,year)){
          let cell = document.createElement("td");
          let cellText = document.createTextNode("n/a");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }else{
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tbl.appendChild(row);
    }
    console.log(firstDay);
  }

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
};
