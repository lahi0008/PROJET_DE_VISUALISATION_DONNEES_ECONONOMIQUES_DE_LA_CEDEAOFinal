am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{
	"country": "Benin",
	"visits": 25.4
}, {
	"country": "Burkina Faso",
	"visits": 28.2
}, {
	"country": "Cap Vert",
	"visits": 101.6
}, {
	"country": "Cote d'ivoire",
	"visits": 32.0
}, {
	"country": "Gambie",
	"visits": 88.1
}, {
	"country": "Ghana",
	"visits": 156.8
}, {
	"country": "Guinee",
	"visits": 54.5
}, {
	"country": "Guinee Bissau",
	"visits": 47.8
}, {
	"country": "Liberia",
	"visits": 30.2
}, {
	"country": "Mali",
	"visits": 26.0
}, {
	"country": "Niger",
	"visits": 23.1
}, {
	"country": "Nigeria",
	"visits": 8.8
}, {
	"country": "Senegal",
	"visits": 45.7
}, {
	"country": "Sierra Leone",
	"visits": 30.8
}, {
	"country": "Togo",
	"visits": 45.3
}






];


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 20;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "country";
series.dataFields.valueX = "visits";
series.tooltipText = "{valueX.value}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panY";


// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
	return chart.colors.getIndex(target.dataItem.index);
});