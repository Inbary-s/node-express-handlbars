$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
          name: $("#ca").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
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
      event.preventDefault();
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
      console.log(id);
      console.log(newDevoured);
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function () {
          console.log("changed to devoured to ", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});
