//Single-Page Website
$(function() {
    $("nav a").click(function() {
        var $linkClicked = $(this).attr("href");
        document.location.hash = $linkClicked;
        if (!$(this).hasClass("active")) {
            $("nav a").removeClass("active");
            $(this).addClass("active");
            $("#container section").hide();
            $($linkClicked).fadeIn();
            return false;
        }
        else {
            return false;
        }
    });
    var hash = window.location.hash;
    hash = hash.replace(/^#/, '');
    switch (hash) {
        case 'page2' :
            $("#" + hash + "-link").trigger("click");
            break;
        case 'page3' :
            $("#" + hash + "-link").trigger("click");
            break;
    }
});

//Show Homepage As Active Nav Item On Load
$('nav a.page1').addClass('current');

//Show Active Navigation Item
$(function(){
    $('nav a').click(function () {
        $('nav a').removeClass('current');
        $(this).addClass('current');
     });
 });

//Contact Info Hover
$(function() {
	if($(window).width() > 600){
	    $('#danielle').hover(function () {
	        $(this).stop().animate({
	            opacity: .25
	        }, 200);
	        $('#danielle2').removeClass('hide');
	    }, function () {
	        $(this).stop().animate({
	            opacity: 1
	        }, 500);
	        $('#danielle2').addClass('hide');
	    });
    }
});

//SlickNav
$(function(){
	$("#menu").slicknav();
});

//Form Validator
$(function() {
    $("form").submit(function(event){
        event.preventDefault();
        if(!$(".validator-error").length) {
            var user = [$("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#message").val()];
            console.log(JSON.stringify(user));
            $.ajax(
                {
                    type: "POST",
                    url: "file://localhost/Users/daniellenutt/Documents/UArts/Web3/daniellenutt/index.html#page3",
                    dataType: 'json',
                    data: JSON.stringify(user),
                    success: function() {
                        console.log('complete');
                    },
                    error: function(){
                        console.log("error");
                    }
                }
            );
        }
    });
});
