$(document).ready(function () {
    // Fetch existing sugar levels from the API using AJAX
    $.ajax({
      url: "http://localhost:3000/",
      type: "GET",
      success: function (data) {
        // Check if data exists
        if (data.length > 0) {
          // Remove the "This Table is Empty Initially" row
          $("#status").remove();
  
          // Loop through the sugar levels and append rows to the table
          data.forEach(function (sugarLevel) {
            var row = `<tr>
                        <td>${sugarLevel.reading}</td>
                        <td>${sugarLevel.mood}</td>
                        <td>${sugarLevel.type}</td>
                      </tr>`;
            $("#tableBody").append(row);
          });
        }
      },
      error: function () {
        // Handle error
        $("#status td").text("Error occurred while fetching data.");
      },
    });
  
    // Delete all sugar levels
    $("#deleteAll").click(function () {
      $.ajax({
        url: "/sugar-level",
        type: "DELETE",
        success: function () {
          // Remove all rows from the table
          $("#tableBody").empty();
  
          // Display a message indicating that the table is empty
          var message = `<tr id="status">
                          <td colspan="3">This Table is Empty Initially</td>
                        </tr>`;
          $("#tableBody").append(message);
        },
        error: function () {
          // Handle error
          alert("Error occurred while deleting all records.");
        },
      });
    });
  
    // Add new sugar level
    $("#addForm").submit(function (event) {
      event.preventDefault();
  
      // Get form values
      var reading = $("#reading").val();
      var mood = $("#mood").val();
      var type = $("#type").val();
  
      // Create a new sugar level object
      var sugarLevel = {
        reading: reading,
        mood: mood,
        type: type,
      };
  
      // Send a POST request to the API to save the sugar level
      $.ajax({
        url: "/",
        type: "POST",
        data: sugarLevel,
        success: function (data) {
          // Append a new row to the table with the saved sugar level data
          var row = `<tr>
                      <td>${data.reading}</td>
                      <td>${data.mood}</td>
                      <td>${data.type}</td>
                    </tr>`;
          $("#tableBody").append(row);
  
          // Reset the form inputs
          $("#addForm")[0].reset();
  
          // Close the modal
          $("#myModal").modal("hide");
        },
        error: function () {
          // Handle error
          alert("Error occurred while saving the sugar level.");
        },
      });
    });
  });
  