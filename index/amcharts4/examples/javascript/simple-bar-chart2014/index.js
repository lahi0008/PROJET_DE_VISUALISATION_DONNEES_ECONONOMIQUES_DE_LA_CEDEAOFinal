am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.colors.saturation = 0.4;

chart.data = [{
	"country": "Benin",
	"visits": 30.9
}, {
	"country": "Burkina Faso",
	"visits": 30.4
}, {
	"country": "Cap Vert",
	"visits": 114.0
}, {
	"country": "Cote d'ivoire",
	"visits": 35.6
}, {
	"country": "Gambie",
	"visits": 104.1
}, {
	"country": "Ghana",
	"visits": 170.2
}, {
	"country": "Guinee",
	"visits": 89.2
}, {
	"country": "Guinee Bissau",
	"visits": 47.6
}, {
	"country": "Liberia",
	"visits": 37.7
}, {
	"country": "Mali",
	"visits": 27.1
}, {
	"country": "Niger",
	"visits": 25.6
}, {
	"country": "Nigeria",
	"visits": 10.6
}, {
	"country": "Senegal",
	"visits": 54.4
}, {
	"country": "Sierra Leone",
	"visits": 35.4
}, {
	"country": "Togo",
	"visits": 52.6
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