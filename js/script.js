$(document).ready(function () {
    $.ajax({
      url: "js/character.json",
      success: function (data) {
        data.cartoons.forEach((cartoon) => {
          $("table tbody").append(`
            <tr class="name">
              <td>${cartoon.First_Name}</td>
              <td>${cartoon.Last_Name}</td>
              <td>${cartoon.Role}</td>
              <td>${cartoon.Affiliation}</td>
              <td>${cartoon.Status}</td>
              <td>${cartoon.FirstAppearance}</td>
              <td>${cartoon.Abilities}</td>
              <td>${cartoon.NotableAchievements}</td>
            </tr>
          `);
        });
  
        // Initialize filter counts
        updateFilterCounts();
      }
    });
  
    $("#search").on("input", function () {
      var searchTerm = $(this).val().toLowerCase();
  
      $("tbody tr.name").each(function () {
        let firstName = $(this).find("td:eq(0)").text().toLowerCase();
  
        if (firstName.includes(searchTerm)) {
          $(this).addClass("highlighted");
        } else {
          $(this).removeClass("highlighted");
        }
      });
    });
  
    $("#filterAM").click(function () {
      filterByLastName("A", "M");
    });
  
    $("#filterNZ").click(function () {
      filterByLastName("N", "Z");
    });
  
    function filterByLastName(startLetter1, startLetter2) {
      $("tbody tr.name").each(function () {
        var lastName = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
  
        if (
          (lastName >= startLetter1 && lastName <= startLetter2) ||
          lastName === ""
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
        var lastName = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return lastName >= "A" && lastName <= "M";
      }).length;
  
      var countNZ = $("tbody tr.name").filter(function () {
        var lastName = $(this).find("td:eq(1)").text().charAt(0).toUpperCase();
        return lastName >= "N" && lastName <= "Z";
      }).length;
  
      $("#filterAM").text(`A - M (${countAM})`);
      $("#filterNZ").text(`N - Z (${countNZ})`);
    }
  });
  