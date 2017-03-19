const {ipcRenderer} = require('electron')

var data = [];

var titles;

var tabs = document.getElementById("tabs");

ipcRenderer.on('create', (event, arg) => {
    type = arg.type;
    titles={
        "id": arg.name,
        "size": 15,
        "text": arg.name
    }
    var tab = document.createElement("li");
    var tabTitle = document.createElement("a");
    tabTitle.innerHTML = arg.name;
    tab.appendChild(tabTitle);
    tabs.appendChild(tab);
});

ipcRenderer.on('addvalue', (event, arg) => {
    if(arg.name == titles.id)
    {
        data.push(arg)
    }
    AmCharts.makeChart("chartdiv",
        {
            "type": "serial",
            "categoryField": "category",
            "rotate": true,
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "type": "column",
                    "valueField": "column-1"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": ""
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": false,
                "useGraphSettings": true
            },
            "titles": titles,
            "dataProvider": data
        }
    );
});

$('li > a').click(function() {
    console.log("clicked");
    $('li').removeClass();
    $(this).parent().addClass('active');
});
