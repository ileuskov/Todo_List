// Strikethrough effect for the Todos that are clicked. "On" instead of "click" (because the future elements have to work too)
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete the Todo. "On" instead of "click" here too
$("ul").on("click", "span", function (event) {
    //Fading out the parent class of the span (in this case: "li" element)
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // Stopping the bubbling up to parent elements (so the function works only for span)
    event.stopPropagation();
});

// Adding a new Todo by pressing the enter
$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        // taking the text input for a new Todo from the user. Clearing the input afterwards
        var todoText = $(this).val();
        $(this).val("");
        // adding this text as a new li to the ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
