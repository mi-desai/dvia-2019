var globe
var shale
var quakes

// function preload() {
//   shale = loadJSON("data/shale.json")
//   quakes = loadTable("data/2.5_month.csv", 'csv', 'header')
// }

$(function() {
$(document).ready(function() {
  
$('select').change(function() {
        let selection = {category: $('select[name="year"]').val()};
        getData(selection);
});

function getData(selection) {
  console.log(selection);
  
}


});

});