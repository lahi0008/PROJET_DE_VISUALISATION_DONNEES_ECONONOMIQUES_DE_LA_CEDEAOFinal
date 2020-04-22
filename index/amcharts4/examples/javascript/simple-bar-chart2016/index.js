am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{
	"country": "Benin",
	"visits": 50
}, {
	"country": "Burkina Faso",
	"visits": 36.4
}, {
	"country": "Cap Vert",
	"visits": 119.0
}, {
	"country": "Cote d'ivoire",
	"visits": 41.8
}, {
	"country": "Gambie",
	"visits": 99.0
}, {
	"country": "Ghana",
	"visits": 166.0
}, {
	"country": "Guinee",
	"visits": 53.0
}, {
	"country": "Guinee Bissau",
	"visits": 45.2
}, {
	"country": "Liberia",
	"visits": 43.0
}, {
	"country": "Mali",
	"visits": 35.0
}, {
	"country": "Niger",
	"visits": 40.6
}, {
	"country": "Nigeria",
	"visits": 15.0
}, {
	"country": "Senegal",
	"visits": 57.0
}, {
	"country": "Sierra Leone",
	"visits": 48.0
}, {
	"country": "Togo",
	"visits": 76.0
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