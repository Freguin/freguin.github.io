var main = function() {
 $('.our-logo').fadeIn(2800).css("display","inline").delay(1700).fadeOut(1000, function(){
   $('.main-body').slideDown(200);
 });
};
$(document).ready(main);
