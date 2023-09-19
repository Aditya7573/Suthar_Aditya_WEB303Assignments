// Add a click event listener to the links in the content-wrapper
$(document).ready(function() {
    $("#prospect, #convert, #retain").on("click", function(event) {
        event.preventDefault();

        // Get the ID of the clicked link
        var linkId = $(this).attr("id");

        // Perform an AJAX request to load content from the corresponding file
        $.ajax({
            url: linkId + ".html",
            dataType: "html",
            success: function(data) {
                // Hide the content div with animation
                $("#content").hide(400, function() {
                    // Clear the existing content
                    $(this).empty();

                    // Append the new content and show it with animation
                    $(this).html(data).show(400);
                });
            },
            error: function() {
                // Handle error, e.g., content not found
                alert("Error loading content.");
            }
        });
    });
});
