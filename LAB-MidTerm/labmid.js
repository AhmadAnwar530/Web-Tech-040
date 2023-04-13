console.log("chal raha ha!");
$('#jq1').click(function(){
    $(this).css({
        'color' :'red',
        //other styles
    })
});

$("p").bind("click", function(){
    alert("The paragraph was clicked.");
  });

function alertAlert(){
    document.getElementById("logo");
    $("#logo").bind("click", function(){
        alert("The paragraph was clicked.");
      });
    }