am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);


chart.data = [{
    "country": "Inflation Faible",
    "value": 8
}, {
    "country": "Inflation Moyenne",
    "value": 5
}, {
    "country": "Inflation Eleve",
    "value": 2
}];

chart.innerRadius = am4core.percent(50);

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

series.slices.template.cornerRadius = 10;
series.slices.template.innerCornerRadius = 7;
series.alignLabels = false;
series.labels.template.padding(0,0,0,0);

series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#fff");

series.slices.template.events.on("over", function (event) {
    event.target.dataItem.label.isHover = true;
})

series.slices.template.events.on("out", function (event) {
    event.target.dataItem.label.isHover = false;
})

series.ticks.template.disabled = true;

// this creates initial animation
series.hiddenState.properties.opacity = 1;
series.hiddenState.properties.endAngle = -90;
series.hiddenState.properties.startAngle = -90;

chart.legend = new am4charts.Legend();