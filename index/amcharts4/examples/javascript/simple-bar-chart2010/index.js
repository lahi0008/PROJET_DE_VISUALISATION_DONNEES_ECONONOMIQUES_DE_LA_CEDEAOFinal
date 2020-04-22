am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{
	"country": "Benin",
	"visits": 28.5
}, {
	"country": "Burkina Faso",
	"visits": 28.6
}, {
	"country": "Cap Vert",
	"visits": 72.1
}, {
	"country": "Cote d'ivoire",
	"visits": 60.2
}, {
	"country": "Gambie",
	"visits": 72.2
}, {
	"country": "Ghana",
	"visits": 137.8
}, {
	"country": "Guinee",
	"visits": 86.8
}, {
	"country": "Guinee Bissau",
	"visits": 164.0
}, {
	"country": "Liberia",
	"visits": 42.0
}, {
	"country": "Mali",
	"visits": 0.1
}, {
	"country": "Niger",
	"visits": 24.0
}, {
	"country": "Nigeria",
	"visits": 0.1
}, {
	"country": "Senegal",
	"visits": 35.0
}, {
	"country": "Sierra Leone",
	"visits": 47.1
}, {
	"country": "Togo",
	"visits": 46.7
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