



//$(window).scroll(function(){
//    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
//  });



( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });

alert("I am an alert box!");