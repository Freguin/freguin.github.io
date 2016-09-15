var main = function() {
 $('.our-logo').fadeIn(2800).css("display","inline").delay(1700).fadeOut(1000, function(){
   $('.main-body').slideDown(200).css("display","block");
 });
 $('.arrow').click(function() {
  $('.main-body').animate({
   top:"50vh";
  },400);
  $('.extra-info').animate({
   top:"0vh";
  },400)
 });
};
$(document).ready(main);
