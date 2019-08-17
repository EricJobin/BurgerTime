//Assets Javascript burgers.js

$(function() {

//--------------------  Eat Burger  ----------------------------

    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = {
            devoured: true
        };

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

//----------------------------- New Burger ----------------------

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurgerNameJS = {
            name: $("#newBurger").val().trim(),
        };

        // Send the POST request. --> Make a New Burger
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurgerNameJS
        }).then(
        function() {
            console.log("Ordered Burger");
            console.log(newBurgerNameJS)
            // Reload the page to get the updated list
            location.reload();
        });
    });

//----------------------------------------------------------------

})
