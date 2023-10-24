// Define the ContentItem class
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
      return `<div class="content-item-wrapper" id="content-item-${this.id}">
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        <div>${this.categoryGenre}</div>
      </div>`;
    }
  }
  
  $(document).ready(function () {
    // Create an array of 5 F1-related content items
    const contentItems = [
      new ContentItem(0, 'Lewis Hamilton', 'A biography of the legendary F1 driver', 'Biography'),
      new ContentItem(1, 'Monaco Grand Prix', 'Explore the history and excitement of the Monaco Grand Prix', 'Race'),
      new ContentItem(2, 'F1 Technology', 'Discover the cutting-edge technology behind Formula 1 cars', 'Technology'),
      new ContentItem(3, 'F1 Teams', 'A look at the top F1 teams and their drivers', 'Teams'),
      new ContentItem(4, 'F1 Champions', 'Profiles of past F1 World Champions', 'History'),
    ];
  
    // Display the F1-related content items on the web page
    const contentList = $('#content-item-list');
    contentItems.forEach((contentItem) => {
      contentList.append(contentItem.toString());
    });
  
    // Add styling to content items
    $('.content-item-wrapper').css({
      border: '1px solid #000',
      width: '300px',
      padding: '10px',
      margin: '10px auto',
    });
  
    // Bonus: Add buttons for updating content items
    $('#content').append('<button id="updateSuccessful">Update Successful</button>');
    $('#content').append('<button id="updateUnsuccessful">Update Unsuccessful</button');
  
    $('#updateSuccessful').click(function () {
      // Attempt to update a content item successfully
      contentItems[0].updateContentItem(0, 'Updated Lewis Hamilton Biography', null, null);
      contentList.empty();
      contentItems.forEach((contentItem) => {
        contentList.append(contentItem.toString());
      });
    });
  
    $('#updateUnsuccessful').click(function () {
        // Attempt to update a content item Unsuccessfully
        contentItems[0].updateContentItem(0, 'Unupdated Lewis Hamilton Biography', null, null);
        contentList.empty();
        contentItems.forEach((contentItem) => {
          contentList.append(contentItem.toString());
        });
      });
      
  });
  