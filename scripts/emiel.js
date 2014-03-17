

$(document).ready(function() {
   $(".company-pic").mouseenter(function() {
       $(this).animate({
           top: '10px'
       });
   });
   $(".company-pic").mouseleave(function() {
       $(this).animate({
           top: '-10px'
       });
   });
   $(".popup").hide();
   $(".black").hide();
   $(".readmore").click(function () {
    $(".popup").toggle();
    $(".black").toggle();

   });

});



