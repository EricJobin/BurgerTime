//Assets Javascript burgers.js

// Make sure we wait to attach our handlers until the DOM is fully loaded.

//--------------------  Eat Burger  ----------------------------

$(function() {
    $(".eat-burger").on("click", function(event) {
        // console.log('click!');
        var id = $(this).data("id");
        var eaten = {
            devoured: true
        };
        // console.log('id '+id);
        // console.log(eaten);

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

//----------------------------- New Burger ----------------------

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log("click")

    var newBurgerName = {
        name: $("#newBurger").val().trim(),
    };

    // Send the POST request. --> Make a New Burger
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurgerName
    }).then(
    function() {
        console.log("Ordered Burger");
        console.log(newBurgerName)
        // Reload the page to get the updated list
        location.reload();
    });
});

//----------------------------------------------------------------

/* 

<form class="create-form">

    <div class="form-group">
        <label for="newBurger">Burger Name:</label>
        <input type="text" id="newBurger" name="name">
    </div>

    <button type="submit">Order Burger</button>
</form>


$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
        type: "POST",
        data: newCat
    }).then(
    function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
    }
    );
});

<form class="create-form">

    <div class="form-group">
        <label for="ca">Cat Name:</label>
        <input type="text" id="ca" name="name">
    </div>

    <div class="form-group">
        <label for="sleepy">Sleepy?</label><br>
        <input type="radio" name="sleepy" value="1" checked> Sleepy!<br>
        <input type="radio" name="sleepy" value="0"> Awake
    </div>

    <button type="submit">Add Cat</button>
</form> */