// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends 
// a table to your web page and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody");

// View table 
data.forEach((ufo_info) => {
    var row = tbody.append("tr");
    Object.entries(ufo_info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
  d3.event.preventDefault();
  
// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

// Get the value property of the input element
  var inputValue = inputElement.property("value");

// Print inputValue;
//   Print tableData;

  var filteredData = data.filter(ufo => ufo.datetime === inputValue);

// Print filteredData;

 
 // Remove any children from the list 
 tbody.html("");

 // View table after date selected
filteredData.forEach((ufo_info) => {
  var row = tbody.append("tr");
  Object.entries(ufo_info).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

};
