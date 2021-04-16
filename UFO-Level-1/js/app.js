//read in table
// from data.js
var tableData = data;
// view table
console.log(tableData)
//filter data on form 
var form = d3.select("#form");
form.on("submit", filtertable);
//get a reference to the table body
var tbody = d3.select("tbody"); 

//loop through the data 
tableData.forEach(function (ufodates) {
    console.log(ufodates);
    var row = tbody.append("tr");
    Object.entries(ufodates).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value)
    });
});

//filter
//install event on click 
var button = d3.select("#filter-btn")
button.on("click", filtertable);

function filtertable() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime").property("value");
    console.log(inputElement);
    var filteredData = tableData;
    if (inputElement != ""){
        filteredData = tableData.filter(record => record.datetime === inputElement);  
    };
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach(function (ufodates) {
        console.log(ufodates);
        var row = tbody.append("tr");
        Object.entries(ufodates).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value)
        });
    });
};





