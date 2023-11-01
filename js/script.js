$(document).ready(function () {
    let charactersData = [];
    let sortedColumn = null;
    let sortOrder = 1;

    // Function to render the table based on character data
    function renderTable() {
        const tbody = $("#characterTable tbody");
        tbody.empty();

        charactersData.forEach(function (character) {
            const row = $("<tr>");
            row.append($("<td>").text(character.firstName));
            row.append($("<td>").text(character.lastName));
            row.append($("<td>").text(character.age));
            row.append($("<td>").text(character.occupation));
            row.append($("<td>").text(character.location));
            row.append($("<td>").text(character.dateOfBirth));
            row.append($("<td>").text(character.debutDate));
            tbody.append(row);
        });
    }

    // Function to update table header with arrow symbols
    function updateHeaderArrows() {
        $("#characterTable th .sort-icon").html(""); // Clear existing icons
        $("#characterTable th").each(function () {
            if ($(this).data("sort") === sortedColumn) {
                if (sortOrder === 1) {
                    $(this).find(".sort-icon").html("&#x25B2;"); // Up arrow
                } else {
                    $(this).find(".sort-icon").html("&#x25BC;"); // Down arrow
                }
            }
        });
    }

    // Function to sort the table by a given column
    function sortTable(column) {
        if (sortedColumn === column) {
            sortOrder *= -1;
        } else {
            sortedColumn = column;
            sortOrder = 1;
        }

        charactersData.sort((a, b) => {
            const aValue = a[column];
            const bValue = b[column];
            if (aValue < bValue) {
                return -1 * sortOrder;
            }
            if (aValue > bValue) {
                return 1 * sortOrder;
            }
            return 0;
        });

        renderTable();
        updateHeaderArrows();
    }

    // Handle click on table headings for sorting
    $("#characterTable th").click(function () {
        const column = $(this).data("sort");
        sortTable(column);
    });

    // Load character data from the JSON file using AJAX
    $.getJSON("js/characters.json", function (data) {
        charactersData = data;
        renderTable();
    });
});
