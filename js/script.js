/*
    Assignment #4
    Aditya Suthar
*/

$(function () {
    // Function to calculate the distance in meters between two lat/long pairs on Earth
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // Radius of Earth in meters
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }

    // Check geolocation permission
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get current location
            var currentLat = position.coords.latitude;
            var currentLon = position.coords.longitude;
            var accuracy = position.coords.accuracy;

            // Display current location including accuracy
            $("#locationhere").html("Latitude: " + currentLat + "<br>Longitude: " + currentLon + "<br>Accuracy: " + accuracy + " meters");

            // Check if a location value is stored in local storage
            var storedLocation = localStorage.getItem("location");
            if (storedLocation) {
                var storedLatLon = storedLocation.split(",");
                var storedLat = parseFloat(storedLatLon[0]);
                var storedLon = parseFloat(storedLatLon[1]);

                // Display stored location
                $("<p>").html("Stored Location: Latitude: " + storedLat + "<br>Longitude: " + storedLon).appendTo("body");

                // Display welcome back message
                $("<h1>").html("Welcome back to the page!").appendTo("body");

                // Calculate and display the distance in kilometers
                var distanceMeters = calcDistanceBetweenPoints(currentLat, currentLon, storedLat, storedLon);
                var distanceKm = distanceMeters / 1000; // Convert to kilometers
                $("<p>").html("You traveled " + distanceKm.toFixed(2) + " km since your last visit").appendTo("body");
            } else {
                // Display welcome message for first-time visitors
                $("<h1>").html("Welcome to the page for the first time!").appendTo("body");
            }

            // Store the current location in local storage
            localStorage.setItem("location", currentLat + "," + currentLon);
        }, function (error) {
            // Handle geolocation errors
            $("#locationhere").html("Geolocation error: " + error.message);
        });
    } else {
        // Geolocation not supported
        $("#locationhere").html("Geolocation is not supported in this browser.");
    }
});
