am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.margin(4,4,4,4);

series.text = "Bienvenue,Bienvenue,Bienvenue,Bienvenue,Visualisation des donnees de la CEDEAO,la CEDEAO, de 2016, par un groupe de 3 etudiants,en master Sciences de Donnees, en l'occurence, Seyni Kaire, Khadim Cisse,Abdoulahi Mbengue, Sous l'egide de ,M.Bousso,et, M.DIOUF,Diagramme,HeatMap,Courbe...,Benin,Burkina,Capt vert,Cote d'ivoire,Gambie,Ghana,Guinee,Guinee Conakry,Mali,Nigeria,Liberia,Senegal,Sierra Leone,Togo."; 

series.colors = new am4core.ColorSet();
series.colors.passOptions = {}; // makes it loop
//series.labelsContainer.rotation = -45;
series.fontWeight = "600";

series.maxFontSize = am4core.percent(30);

setInterval(function () {
  series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
 }, 6000)