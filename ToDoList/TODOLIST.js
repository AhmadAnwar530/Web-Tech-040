// $(document).ready(function () {
console.log("jQuery started!");
$("#status td").text("Lodaing Data...");
$("#status td").click(function () {
  $(this).fadeOut(1000);
});

//     $('#save').submit(function(){
//       let title =   $('#title').val()
//       let body =  $('#body').val()
//       console.log("jQuery ended!")

//     })
//     $('.tableBody').text(function(){
//         $('#status td').text(title)
//         // $('#status td').text(body)
//     })
console.log("jQuery started!");
$(function () {
  console.log("jQuery started!");
  $("#save").click("submit", function () {
    console.log("jQuery started!");
    var field1 = $("#title").val();
    var field2 = $("#body").val();
    console.log(field1);
    console.log(field2);
    //ADD New
    var data =
      `<tr><td>` +
      `<button type="click" id="delete" class="btn btn-danger">&nbsp;Delete&nbsp;</button><button type="submit" id="edit" class="btn btn-primary">&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;</button>` +
      `</td>` +
      `<td>` +
      field1 +
      `</td>` +
      `<td>` +
      field2 +
      `</td></tr>`;
    $("#tableBody").append(data);
    console.log("jQuery ended!");
    //DeleteSpecific
    $("#delete").click(function () {
      //  $(this).closest(field1).remove();
      $(this).parent().parent().remove();
      // this.remove()
    });
    //Delete All
    $("#deleteAll").click(function () {
      $("#tableBody td").remove();
    });

  //Edit Specific
  $("#edit").click(function () {
    var field11 = prompt("Enter new Title!");
    console.log(field11);
    field1 = field11;
    // console.log(field1);
    // field11 = $('#title').val();
    
    var field22 = prompt("Enter new Task!");
    console.log(field22);
    field2 = field22;
    // console.log(field2);
    field11 = $("#title").val(field1);
    field22 = $("#body").val(field2);
    var data1 =
      `<tr><td>` +
      `<button type="click" id="delete" class="btn btn-danger">&nbsp;Delete&nbsp;</button><button type="submit" id="edit" class="btn btn-primary">&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;</button>` +
      `</td>` +
      `<td>` +
      field1 +
      `</td>` +
      `<td>` +
      field2 +
      `</td></tr>`;
    $("#tableBody").append(data1);

  });
  });
});
