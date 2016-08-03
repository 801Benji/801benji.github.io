/* global $ */
$(document).ready(function() {
    alert("Welcome");
});
$('#bgchange').on('click', function() {
    $('body').toggleClass('flick')
});

$('#boxmaker').on('click', function() {
    var maker = $('table').append('<div> </div>');
    var boxcounter = 0;
    for (var i = 0; i <= 'div'; i++) {
        boxcounter++;
        alert("You have " + boxcounter + " boxes");
        return maker;
    }
});
$('#rotatebox').on('click', function() {
    alert("Welcome");

});


