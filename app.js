var main = function() {
 $('.drawfee-logo').fadeIn(2800).css("display","inline").delay(1700).fadeOut(1000, function(){
   $('.our-logo').fadeIn(2800).css("display","inline").addClass('show').delay(1700).fadeOut(1000).removeClass('show');
   // $('.main-body').delay(1500).addClass('show');
 });
};
$(document).ready(main);
