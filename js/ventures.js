$("#submit-btn").click(function() {
  populateTable();
  $.ajax({
    type:"GET",
    url: "http://10.20.10.222:5000/Restaurants/Hollywood", 
    success: function(result) {
      populateTable("asdf");
      console.log("success");
      console.log(result);
    },
    error: function(xhr,status,error) {
      console.log("wtf???");
      testr();
    }
  })
  console.log("end of hte line");
});

function populateTable(results) {
  var results = [[1, 2, 3, 4], [5, 6, 7, 8]];
  for (var i = 0; i < results.length; i++) {
    var row = "<tr>";
    for (var j = 0; j < results[0].length; j++) {
      row += "<td>" + results[i][j] + "</td>";
    }
    row += "</tr>";
    $("#results-body").append(row);
  }
}

function testr() {
  console.log("inside testr");
}