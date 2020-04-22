am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{
	"country": "Benin",
	"visits": 41.6
}, {
	"country": "Burkina Faso",
	"visits": 34.2
}, {
	"country": "Cap Vert",
	"visits": 121.2
}, {
	"country": "Cote d'ivoire",
	"visits": 42.2
}, {
	"country": "Gambie",
	"visits": 101.1
}, {
	"country": "Ghana",
	"visits": 171.6
}, {
	"country": "Guinee",
	"visits": 43.4
}, {
	"country": "Guinee Bissau",
	"visits": 48.0
}, {
	"country": "Liberia",
	"visits": 31.9
}, {
	"country": "Mali",
	"visits": 30.8
}, {
	"country": "Niger",
	"visits": 36.2
}, {
	"country": "Nigeria",
	"visits": 10.9
}, {
	"country": "Senegal",
	"visits": 57.1
}, {
	"country": "Sierra Leone",
	"visits": 29.1
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