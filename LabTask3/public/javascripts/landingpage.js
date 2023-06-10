function addtocart(){
//    var cart = document.getElementsByClassName("button1")
   alert("Add to Cart Successfully!");
}

$(document).ready(function() {
   $(".img1").mousemove(function(e) {
     var width = $(this).width();
     var height = $(this).height();
     var xPos = e.pageX - $(this).offset().left - width / 2;
     var yPos = e.pageY - $(this).offset().top - height / 2;
     var angle = Math.atan2(yPos, xPos) * (180 / Math.PI);
     $(this).css("transform", "rotateZ(" + angle + "deg)");
   });
 });
 