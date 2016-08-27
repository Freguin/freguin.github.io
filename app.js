var main = function(){
$('.icon').click(function()
{
$('.menu').animate({
left: "0px"
}, 200);

$('body').animate({
left:"300px"
}, 200);
});
};

$(document).ready(main);
