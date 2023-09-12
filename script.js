/*
    WEB 303 Assignment 1 - jQuery
    Aditya Suthar 

    GitHub Repository Link: https://github.com/Aditya7573/Aditya_Suthar_WEB303Assignments.git
*/

// jQuery document ready function
$(document).ready(function() {
    // Event handler for when salary or percent fields change
    $("#salary, #percent").on("keyup", function() {
        calculateTechAmount();
    });

    // Initial calculation when the page loads
    calculateTechAmount();

    // Function to calculate tech spending amount
    function calculateTechAmount() {
        // Get the values of salary and percent input fields
        var salary = parseFloat($("#salary").val());
        var percent = parseFloat($("#percent").val());

        // Check if both salary and percent are valid numbers
        if (!isNaN(salary) && !isNaN(percent)) {
            // Calculate the amount for tech spending
            var amount = (salary * percent / 100).toFixed(2); // Round to 2 decimal places
            var formattedAmount = "$" + amount; // Add the dollar sign

            // Update the span#amount element with the calculated amount
            $("#amount").text(formattedAmount);
        }
    }
});
