let data = [
  {
    year:2018,
    month:3,
    day:21,
    note:"My Birthday"
  },
  {
    year:2018,
    month:3,
    day:25,
    note:"Go to work."
  }
];


data.forEach(function(event){
  console.log("Note: "+event.note);
});
