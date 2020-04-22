am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "country": "Benin",
    "visits": -1.5
}, {
    "country": "Burkina Faso",
    "visits": -4.4
}, {
    "country": "Cap vert",
    "visits": -10.6
}, {
    "country": "Cote d'ivoire",
    "visits": -1.7
}, {
    "country": "Gambie",
    "visits": -4.5
}, {
    "country": "Ghana",
    "visits": -5.9
}, {
    "country": "Guinee",
    "visits": -14.3
}, {
    "country": "Guinee Bissau",
    "visits": 1.2
}, {
    "country": "Liberia",
    "visits": 1.7
}, {
    "country": "Mali",
    "visits": -2.3
}, {
    "country": "Niger",
    "visits": -2.4
}, {
    "country": "Nigeria",
    "visits": -3.1
}, {
    "country": "Senegal",
    "visits": -5.2
}, {
    "country": "Sierra Leone",
    "visits": -5.1
}, {
    "country": "Togo",
    "visits": 0.3
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