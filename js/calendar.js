window.onload = function(){
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  console.log(months[currentMonth]);

  showCalendar(currentMonth,currentYear);

  function showCalendar(month,year){
    let firstDay = (new Date(year,month)).getDay();

    //body of the table
    let tbl = document.querySelector("#calendar-body");

    //add blankspace
    tbl.innerHTML = "";

    //creating all cells
    let date = 1;
    for(let i = 0; i < 6; i++){
      let row = document.createElement("tr");
    }
    console.log(firstDay);
  }
};
