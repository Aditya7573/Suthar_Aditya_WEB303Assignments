$(document).ready(function () {
    // Create an array of ContentItem objects with the theme "F1"
    const contentItems = [
      new ContentItem(0, "Lewis Hamilton", "Seven-time world champion", "Driver"),
      new ContentItem(1, "Monaco Grand Prix", "Iconic street circuit", "Race"),
      new ContentItem(2, "Ferrari SF90", "2019 Scuderia Ferrari car", "Car"),
      new ContentItem(3, "Red Bull Racing", "Austrian racing team", "Team"),
      new ContentItem(4, "Silverstone Circuit", "British Grand Prix venue", "Race"),
    ];
  
    // Add content items to the page
    const $contentItemList = $('#content-item-list');
    contentItems.forEach((item) => {
      $contentItemList.append(item.toString());
    });
  
    // Bonus: Add buttons to update content items
    $('#updateSuccessButton').click(function () {
      // Example of a successful update
      contentItems[0].updateContentItem(0, "Updated Lewis Hamilton", null, null);
      // Re-render the updated content
      $contentItemList.empty();
      contentItems.forEach((item) => {
        $contentItemList.append(item.toString());
      });
    });
  
    $('#updateFailButton').click(function () {
      // Example of an unsuccessful update (ID does not match)
      contentItems[1].updateContentItem(0, "Attempted Update", null, null);
      // No change should occur
    });
  });
  