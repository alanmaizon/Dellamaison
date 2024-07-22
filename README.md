*User Stories*

- As a visitor, I want to view a list of recipes so that I can choose one to cook.

Acceptance Criteria:
A list of recipes is displayed on the main page.
Each recipe shows its title and a button to view the details.

- As a visitor, I want to view the details of a selected recipe so that I can see the ingredients and steps.

Acceptance Criteria:
When a recipe is selected, its details are displayed.
The details include the title, list of ingredients, and list of steps.

- As a visitor, I want to mark steps as done so that I can keep track of my progress while cooking.

Acceptance Criteria:
Each step has a checkbox.
When a checkbox is clicked, the state is saved and remains persistent on page reload.

- As a visitor, I want to go back to the list of recipes from the recipe details view so that I can choose another recipe.

Acceptance Criteria:
A 'Back' button is available on the recipe details view.
Clicking the 'Back' button returns the user to the list of recipes.

- As a visitor, I want the app to remember which steps I've marked as done even if I refresh the page so that I don't lose my progress.

Acceptance Criteria:
The state of each checkbox (marked or unmarked) is saved to localStorage.
When the recipe details view is loaded, checkboxes are pre-checked based on the saved state in localStorage.

- As a visitor, I want the interface to be clean and easy to use so that I can navigate the app without confusion.

Acceptance Criteria:
The app has a simple and intuitive layout.
Buttons and other interactive elements are clearly labeled and easy to find.

- As a visitor, I want to view available merchandise so that I can decide what to purchase.
  
Acceptance Criteria:
Merchandise items are displayed in a grid or list format.
Each item includes an image, name, and price.

- As a visitor, I want to view detailed information about a merchandise item so that I can make an informed purchasing decision.
  
Acceptance Criteria:
Clicking on an item shows detailed information including a larger image, description, price, and available sizes or options.

- As a visitor, I want to add items to my basket so that I can purchase them later.
  
Acceptance Criteria:
Each item has an "Add to Basket" button.
Clicking the button adds the item to the basket and updates the basket count.


- As a visitor, I want to view my basket so that I can see which items I have selected for purchase.
  
Acceptance Criteria:
The basket shows a list of items added, each with a small image, name, price, and quantity.
The basket displays the total price of all items.

- As a visitor, I want to remove items from my basket so that I can adjust my purchase selections.
  
Acceptance Criteria:
Each item in the basket has a "Remove" button.
Clicking the "Remove" button removes the item from the basket and updates the total price and item count.

- As a visitor, I want to proceed to checkout so that I can purchase the items in my basket.
  
Acceptance Criteria:
There is a "Checkout" button in the basket view.
Clicking the "Checkout" button opens a modal or navigates to a checkout page.

*Optional/Advanced User Stories*

- As a visitor, I want the basket to persist even if I leave the page or close the browser so that I don't lose my selected items.
  
Acceptance Criteria:
Items added to the basket are stored in localStorage.
When the page is reloaded, the basket contents are restored from localStorage.

- As a visitor, I want to be able to adjust the quantity of items in my basket so that I can buy multiple units of the same item.
  
Acceptance Criteria:
Each item in the basket allows the quantity to be increased or decreased.
The total price and item count update accordingly.

- As a visitor, I want to view the total charges including item cost, fees, and shipping so that I know the full cost of my purchase.
  
Acceptance Criteria:
The basket displays item total, fee charges, and shipping charges.
The total charges are calculated and displayed.

- As a Visitor, I want to be informed about any ongoing promotions or discounts so that I can take advantage of them.
  
Acceptance Criteria:
Any current promotions or discount codes are displayed prominently on the merchandise page or in the basket/checkout view.

- As a visitor, I want the website to be responsive so that I can view and interact with it on any device.
  
Acceptance Criteria:
The merchandise page layout adjusts for different screen sizes (desktop, tablet, mobile).
Interactive elements (e.g., buttons, forms) are usable on all devices.

- As a visitor, I want to add new recipes so that I can expand my collection of recipes.

Acceptance Criteria:
A form is available to add a new recipe with a title, ingredients, and steps.

- As a visitor, I want to add new recipes so that I can upload recipes with an image, ingredients and steps.

Acceptance Criteria:
An 'Submit Recipe' form is available to submit a recipe.
Clicking the 'Submit Recipe' displays a message that the form has been submited sucessfully.
The form allows the user to fill a form with the title, upload an image file, ingredients, and steps of the recipe.

- As a visitor, I want to search for recipes by title so that I can quickly find a specific recipe.

Acceptance Criteria:
A search bar is available on the main page.
Typing into the search bar filters the list of recipes to match the search term.

- As a visitor, I want to share recipes with others so that I can recommend my favorite recipes to friends and family.

Acceptance Criteria:
Each recipe has a 'Share' button.
Clicking the 'Share' button provides a link or method to share the recipe (e.g., via email or social media).
