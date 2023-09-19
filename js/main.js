$(document).ready(function() {
    $("#prospect, #convert, #retain").on("click", function(event) {
        event.preventDefault();

        var linkId = $(this).attr("id");

        $.ajax({
            url: linkId + ".html",
            type: 'GET', // Add this line to specify the request type
            dataType: "html",
            success: function(data) {
                var $contentVal = $('#content');
                $contentVal.hide().html(data).fadeIn(1500).css({
                    'border': '1.5px solid blue'
                });
            },
            error: function() {
                alert("Error loading content.");
            }
        });
    });
});
