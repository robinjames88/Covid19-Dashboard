//access the dom
$(document).ready(function() {

  $("#button").click(function() { // click method

    var userdata = $("#city").val(); // collecting the user input for the city entered
    // ajax call for url api
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + userdata + "&appid=ed082eafda2fc492fedc0704cbd63729&units=metric",
      type: "GET", // the get request
      dataType: "jsonp",
      success: function(data) { //success callback function
        var display = show(data); // the parsed json data is passed to show function for extraction
        $ ("#temp").html(display); // the temperature is displayed with element with id "temp".
      }
    });
  });
});
// function for extracting the required reading from json data
function show(data){
  return "<h4>Current Temperature: "+ data.main.temp +"°C</h4>";
}
