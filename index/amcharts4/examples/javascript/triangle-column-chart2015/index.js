am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "country": "Benin",
    "visits": -7.9
}, {
    "country": "Burkina Faso",
    "visits": -2.0
}, {
    "country": "Cap vert",
    "visits": 3.8
}, {
    "country": "Cote d'ivoire",
    "visits": -2.9
}, {
    "country": "Gambie",
    "visits": -6.3
}, {
    "country": "Ghana",
    "visits": -4.7
}, {
    "country": "Guinee",
    "visits": 9.0
}, {
    "country": "Guinee Bissau",
    "visits": 2.7
}, {
    "country": "Liberia",
    "visits": 1.6
}, {
    "country": "Mali",
    "visits": -2.1
}, {
    "country": "Niger",
    "visits": -9.1
}, {
    "country": "Nigeria",
    "visits": -0.8
}, {
    "country": "Senegal",
    "visits": -4.8
}, {
    "country": "Sierra Leone",
    "visits": -4.1
}, {
    "country": "Togo",
    "visits": -6.3
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