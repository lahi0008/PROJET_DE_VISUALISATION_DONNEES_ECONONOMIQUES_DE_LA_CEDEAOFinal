am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "country": "Benin",
    "visits": -2.6
}, {
    "country": "Burkina Faso",
    "visits": -3.5
}, {
    "country": "Cap vert",
    "visits": 8.9
}, {
    "country": "Cote d'ivoire",
    "visits": -2.2
}, {
    "country": "Gambie",
    "visits": -8.7
}, {
    "country": "Ghana",
    "visits": -8.6
}, {
    "country": "Guinee",
    "visits": -3.3
}, {
    "country": "Guinee Bissau",
    "visits": -3.1
}, {
    "country": "Liberia",
    "visits": -1.1
}, {
    "country": "Mali",
    "visits": -2.2
}, {
    "country": "Niger",
    "visits": -2.6
}, {
    "country": "Nigeria",
    "visits": -1.4
}, {
    "country": "Senegal",
    "visits": -5.5
}, {
    "country": "Sierra Leone",
    "visits": -1.6
}, {
    "country": "Togo",
    "visits": -4.6
}];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 60;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.CurvedColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.tension = 1;

chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
});