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

var changed = d3.selectAll(".filter");

// Select the form
var form = d3.select("#form");

// Create event handlers 
changed.on("change", runEnter)

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
  d3.event.preventDefault();
  
// Select the input element and get the raw HTML node
  var eventInput = d3.select(this).select("input")
  var inputID = eventInput.attr("id")
  var inputValue = eventInput.property("value")

  var filteredData = data.filter(ufo => ufo[inputID] === inputValue);

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
