$(document).ready(function() {
    $("#prospect, #convert, #retain").on("click", function(event) {
        event.preventDefault();

        var linkId = $(this).attr("id");

        $.ajax({
            url: linkId + ".html",
            dataType: "html",
            success: function(data) {
                $("#content").hide(400, function() {
                    $(this).empty();
                    $(this).html(data).show(400);
                });
            },
            error: function() {
                alert("Error loading content.");
            }
        });
    });
});
