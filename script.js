// ContentItem class
class ContentItem {
    constructor(id, name, description, categoryGenre) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.categoryGenre = categoryGenre;
    }
  
    updateContentItem(id, name, description, categoryGenre) {
      if (id === this.id) {
        if (name !== null) this.name = name;
        if (description !== null) this.description = description;
        if (categoryGenre !== null) this.categoryGenre = categoryGenre;
      }
    }
  
    toString() {
      return `
        <div id="content-item-${this.id}" class="content-item-wrapper">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.categoryGenre}</div>
        </div>
      `;
    }
  }
  
  $(document).ready(function () {
    // Create an array of ContentItem objects
    const contentItems = [
      new ContentItem(0, "Content 1", "Description 1", "Category 1"),
      new ContentItem(1, "Content 2", "Description 2", "Category 2"),
      new ContentItem(2, "Content 3", "Description 3", "Category 3"),
      new ContentItem(3, "Content 4", "Description 4", "Category 4"),
      new ContentItem(4, "Content 5", "Description 5", "Category 5"),
    ];
  
    // Add content items to the page
    const $contentItemList = $('#content-item-list');
    contentItems.forEach((item) => {
      $contentItemList.append(item.toString());
    });
  
    // Bonus: Add buttons to update content items
    $('#updateSuccessButton').click(function () {
      // Example of a successful update
      contentItems[0].updateContentItem(0, "Updated Content 1", null, null);
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
  