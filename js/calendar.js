class Calendar {
  constructor(month,year) {
    this.month = month;
    this.year = year;
  }

  get currentMonth(){
    return this.month;
  }

  get months(){
      return ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  }

  prev(){
    this.year = (this.month === 0) ? this.year - 1 : this.year;
    this.month = (this.month === 0) ? 11 : this.month - 1;
    this.showCalendar(this.month, this.year);
  }

  next(){
    this.year = (this.month === 11) ? this.year + 1 : this.year;
    this.month = (this.month + 1) % 12;
    this.showCalendar(this.month, this.year);
  }

  showCalendar(){
    let firstDay = (new Date(this.year,this.month)).getDay();
    let prevMonth = this.month - 1;
    let prevMonthFirstDay = this.daysInMonth(prevMonth, this.year);

    let fecha = document.querySelector(".fecha");
    fecha.innerHTML = this.months[this.month]+ ", "+this.year;

    //body of the table
    let tbl = document.querySelector("#calendar-body");

    //add blankspace
    tbl.innerHTML = "";

    //creating all cells
    let date = 1;
    let prevDate = prevMonthFirstDay - (firstDay-1);
    let nextDate = 1;

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
        }else if(date > this.daysInMonth(this.month,this.year)){
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

  printData(){
    let tbl = document.querySelectorAll("#calendar-body td");
    tbl.forEach(function(td){
      data.forEach(function(event){
        if(td.textContent == event.day && event.month === 3 && event.year === 2018){
          td.classList.add("active-event");
        }
      });
    });

  }

  daysInMonth(iMonth, iYear){
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
}
