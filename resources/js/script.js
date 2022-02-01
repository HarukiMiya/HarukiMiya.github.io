$(document).ready(function(){
    // Fix the screen at loading page
    $('body,html').css({
        overflow: "hidden",
        height: '100%'
    });
    
    // hide hero-text until loaded
    $('.hero-text-box').hide();
    $("#loading").delay(8500).fadeOut('slow');
    setTimeout(function(){
        $('.hero-text-box').show();
    }, 8500);
    
    // Release when the loading is done
    setTimeout(function(){
        $('body,html').css({
            overflow: "auto",
            height: 'auto'
        });
      }, 10500);
    // make a text bold when click an inquiry blank
    $("input, textarea, #find-us").focus(function() {
        $("label[for='" + this.id + "']").css("font-weight","bold");
    });
    // make the bold text normal when click somewhere else
    $("input, textarea, #find-us").blur(function() {
        $("label[for='" + this.id + "']").css("font-weight","300");
    });
    
    // when click the button, go to top.
    $('.toTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 4500, "swing");
    });
    
    // scroll down to each elements
    $("#introBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1500);
    });$("#historyBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#history").offset().top
        }, 1500);
    });
    $("#sightseeingBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#sightseeing").offset().top
        }, 1500);
    });
    $("#natureBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#nature").offset().top
        }, 1500);
    });
    $("#foodBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#food").offset().top
        }, 1500);
    });
    $("#hanabiBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#hanabi").offset().top
        }, 1500);
    });
    $("#ryokanBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#ryokan").offset().top
        }, 1500);
    });
});
    