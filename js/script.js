$(document).ready(function () {
    // Accordion functionality
    $(".accordion-header").click(function () {
      $(this).next(".accordion-content").slideToggle();
      $(".accordion-content").not($(this).next()).slideUp();
    });
  
    // Tabbed section functionality
    $(".tab-headers li").click(function () {
      var index = $(this).index();
      $(".tab-content > div").hide().eq(index).show();
      $(".tab-headers li").removeClass("active");
      $(this).addClass("active");
    });
  });
  
  $(document).ready(function () {
    $.ajax({
      url: "js/character.json",
      success: function (data) {
        data.cartoons.forEach((cartoon) => {
          $("table tbody").append(`
                <tr class="name">
                  <td>${cartoon.breed}</td>
                  <td>${cartoon.country}</td>
                  <td>${cartoon.origin}</td>
                  <td>${cartoon.coat}</td>
                  <td>${cartoon.partten}</td>
    
                </tr>
              `);
        });
  
        // Initialize filter counts
        updateFilterCounts();
      },
    });
  
    $("#search").on("input", function () {
      var searchTerm = $(this).val().toLowerCase();
  
      $("tbody tr.name").each(function () {
        let breed = $(this).find("td:eq(0)").text().toLowerCase();
  
        if (breed.includes(searchTerm)) {
          $(this).addClass("highlighted");
        } else {
          $(this).removeClass("highlighted");
        }
      });
    });
  
    $("#search").on("input", function () {
      var searchTerm = $(this).val().toLowerCase();
  
      $("tbody tr.name").each(function () {
        let country = $(this).find("td:eq(1)").text().toLowerCase();
  
        if (country.includes(searchTerm)) {
          $(this).addClass("highlighted");
        } else {
          $(this).removeClass("highlighted");
        }
      });
    });
  
    $("#filterAM").click(function () {
      filterByLastName("N", "Z");
    });
  
    $("#filterNZ").click(function () {
      filterByLastName("A", "M");
    });
  
    function filterByLastName(startLetter1, startLetter2) {
      $("tbody tr.name").each(function () {
        var country = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
  
        if (
          (country >= startLetter1 && country <= startLetter2) ||
          country === ""
        ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
  
      updateFilterCounts();
    }
  
    function updateFilterCounts() {
      var countAM = $("tbody tr.name").filter(function () {
        var country = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return (country = "United States");
      }).length;
  
      var countNZ = $("tbody tr.name").filter(function () {
        var country = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return (country = "United States");
      }).length;
  
      $("#filterAM").text(` U.S `);
      $("#filterNZ").text(` Other`);
    }
  
    // SORTING
  
    $(document).ready(function () {
      let charactersData = [];
      let originalData = []; // Store the original data for resetting
      let sortedColumn = null;
      let sortOrder = 1;
  
      // Function to render the table based on character data
      function renderTable() {
        const tbody = $("#characterTable tbody");
        tbody.empty();
  
        CartoonsData.forEach(function (cartoons) {
          const row = $("<tr>");
          row.append($("<td>").text(cartoons.breed));
          row.append($("<td>").text(cartoon.country));
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
  
      // Keep track of the number of times a column header is clicked
      let clickCount = 0;
  
      // Handle click on table headings for sorting
      $("#characterTable th").click(function () {
        const column = $(this).data("sort");
        sortTable(column);
  
        // Check if the table has been sorted for the third time
        clickCount++;
        if (clickCount === 3) {
          // Reset the table to its original state
          charactersData = [...originalData];
          renderTable();
          sortedColumn = null;
          sortOrder = 1;
          updateHeaderArrows();
          clickCount = 0;
        }
      });
  
      // Handle resetting the table to the original data
      $("#resetTable").click(function () {
        charactersData = [...originalData];
        renderTable();
        sortedColumn = null;
        sortOrder = 1;
        updateHeaderArrows();
      });
  
      // Load character data from the JSON file using AJAX
      $.getJSON("js/characters.json", function (data) {
        charactersData = data;
        originalData = [...data];
        renderTable();
      });
    });
  });
  