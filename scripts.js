/**
 * Created by session2 on 10/19/15.
 */
/**
 * Created by session2 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Population Estimate'],
        ['500', 1992229],
        ['400', 3792000],
        ['300', 2695000],
        ['200', 2099000],
        ['100', 1526000]
    ]);

    var options = {
        title: 'Population Estimate For Bears In Yellowstone',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Years',
            minValue: 0
        },
        vAxis: {
            title: 'Bears'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

/*while(nameAnswer = true) {
 nameAnswer = true;
 var name = prompt("What's your name?");
 alert("Welcome," + " " + name);
 nameAnswer = false;
 }*/

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Brown',  10],
        ['Black',   6],
        ['Grizzly', 5],
        ['Polar',   2],
        ['Panda',   1]
    ]);

    var options = {
        title: 'Types of Bears'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

$(document).ready(function() {
    $("p").hide();
    $("h1").click(function() {
        $(this).next().slideToggle(300);
    });
});
///////////////////////////
    function clickResize2() {
        document.getElementById('pic2').style.width="150px";
        document.getElementById('pic2').style.height="200px";
    }
function clickResize4() {
    document.getElementById('pic4').style.width="150px";
    document.getElementById('pic4').style.height="200px";
}

function clickResize6() {
    document.getElementById('pic6').style.width="150px";
    document.getElementById('pic6').style.height="200px";
}

function clickResize8() {
    document.getElementById('pic8').style.width="150px";
    document.getElementById('pic8').style.height="200px";
}

function input(){
    var newDescription = prompt("Edit Description");
    document.getElementById('p1').innerHTML = newDescription
}