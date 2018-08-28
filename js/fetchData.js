let data = [
  {
    year:2018,
    month:6,
    day:10,
    note:"Carlitos B-day!"
  },
  {
    year:2018,
    month:8,
    day:21,
    note:"My Birthday"
  },
  {
    year:2018,
    month:8,
    day:25,
    note:"Go to work."
  },
  {
    year:2018,
    month:7,
    day:30,
    note:"Go to work."
  }
];


data.forEach(function(event){
  console.log("Note: "+event.note);
});
