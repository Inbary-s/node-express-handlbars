$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
          name: $("#ca").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });    
    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevroured = $(this).data("devoured");
      var newDevouredState = {
        devoured: newDevroured
      };
  
      // Send the PUT request.
      $.ajax("/api/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed to devoured", newDevroured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});
