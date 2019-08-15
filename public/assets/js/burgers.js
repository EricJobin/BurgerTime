//Assets Javascript burgers.js

// Make sure we wait to attach our handlers until the DOM is fully loaded.

//--------------------  Eat Burger  ----------------------------

$(function() {
    $(".eat-burger").on("click", function(event) {
        console.log('click!');
        var id = $(this).data("id");
        var eaten = {
            devoured: true
        };
        console.log('id '+id);
        console.log(eaten);

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: eaten
        }).then(
        function() {
            console.log("Ate ", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });
})

//---------------------------------------------------------------

//----------------------------- New Burger ----------------------

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };

//     // Send the POST request. --> Make a New Burger
//     $.ajax("/api/burger", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//----------------------------------------------------------------

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
