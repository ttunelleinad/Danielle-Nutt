
//About Me Photo Swap
$('img#danielle').mouseenter(function() {
    $(this).css({'display':'none'});
    $('img#danielle2').css({'display':'block'});
});

$('img#danielle2').mouseleave(function() {
    $(this).css({'display':'none'});
    $('img#danielle').css({'display':'block'});
});




