//radar chart data
var radarData = {
	labels : ["Income", "Safety", "Rent"],
	datasets : [
		{
	        fillColor: "rgba(63,169,245,.1)",
            strokeColor: "rgba(63,169,245,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28, 14, 43]
		}
	]
}



//Create Line chart
// var ctx = document.getElementById("lineChart").getContext("2d");
// var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

//Create Radar chart
var ctx2 = document.getElementById("radarChart").getContext("2d");
var myNewChart = new Chart(ctx2).Radar(radarData);
console.log("asdf");
new Chart(ctx2).Radar(radarData,{
    scaleOverride: true,
    scaleSteps: 5,
    scaleStepWidth: 20,
    scaleStartValue: 0,
});

