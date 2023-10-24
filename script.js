$(document).ready(function () {
    // Define the ContentItem class
    class ContentItem {
        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (id === this.id) {
                if (name) this.name = name;
                if (description) this.description = description;
                if (category) this.category = category;
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
            `;
        }
    }

    // Create an array of ContentItems
    const contentItems = [
        new ContentItem(0, "Item 1", "Description 1", "Category 1"),
        new ContentItem(1, "Item 2", "Description 2", "Category 2"),
        new ContentItem(2, "Item 3", "Description 3", "Category 3"),
        new ContentItem(3, "Item 4", "Description 4", "Category 4"),
        new ContentItem(4, "Item 5", "Description 5", "Category 5")
    ];

    // Display the theme title
    $("h2").text("Your Theme Title");

    // Append content items to the #content-item-list
    const $contentItemList = $("#content-item-list");
    contentItems.forEach(item => {
        $contentItemList.append(item.toString());
    });

    // Style content items
    $(".content-item-wrapper").css({
        border: "1px solid black",
        width: "300px",
        padding: "10px",
        margin: "10px auto"
    });

    // Bonus: Add two buttons for update attempts
    $contentItemList.append(`
        <button id="updateSuccessfulButton">Update Successful</button>
        <button id="updateUnsuccessfulButton">Update Unsuccessful</button>
    `);

    // Define click event handlers for bonus
    $("#updateSuccessfulButton").click(function () {
        // Implement a successful update here
    });

    $("#updateUnsuccessfulButton").click(function () {
        // Implement an unsuccessful update here
    });
});
