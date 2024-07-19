*User Stories*

- As a user, I want to view a list of recipes so that I can choose one to cook.

Acceptance Criteria:
A list of recipes is displayed on the main page.
Each recipe shows its title and a button to view the details.

- As a user, I want to view the details of a selected recipe so that I can see the ingredients and steps.

Acceptance Criteria:
When a recipe is selected, its details are displayed.
The details include the title, list of ingredients, and list of steps.

- As a user, I want to mark steps as done so that I can keep track of my progress while cooking.

Acceptance Criteria:
Each step has a checkbox.
When a checkbox is clicked, the state is saved and remains persistent on page reload.

- As a user, I want to go back to the list of recipes from the recipe details view so that I can choose another recipe.

Acceptance Criteria:
A 'Back' button is available on the recipe details view.
Clicking the 'Back' button returns the user to the list of recipes.

- As a user, I want the app to remember which steps I've marked as done even if I refresh the page so that I don't lose my progress.

Acceptance Criteria:
The state of each checkbox (marked or unmarked) is saved to localStorage.
When the recipe details view is loaded, checkboxes are pre-checked based on the saved state in localStorage.

- As a user, I want the interface to be clean and easy to use so that I can navigate the app without confusion.

Acceptance Criteria:
The app has a simple and intuitive layout.
Buttons and other interactive elements are clearly labeled and easy to find.

*Optional/Advanced User Stories*

- As a user, I want to add new recipes so that I can expand my collection of recipes.

Acceptance Criteria:
A form is available to add a new recipe with a title, ingredients, and steps.
The new recipe appears in the list of recipes after being added.

- As a user, I want to add new recipes so that I can upload recipes with an image, ingredients and steps.

Acceptance Criteria:
An 'Submit Recipe' form is available to submit a recipe.
Clicking the 'Submit Recipe' displays a message that the form has been submited sucessfully.
The form allows the user to fill a form with the title, upload an image file, ingredients, and steps of the recipe.

- As a user, I want to delete recipes so that I can remove any recipes I no longer need.

Acceptance Criteria:
A 'Delete' button is available for each recipe.
Clicking the 'Delete' button removes the recipe from the list.

- As a user, I want to search for recipes by title so that I can quickly find a specific recipe.

Acceptance Criteria:
A search bar is available on the main page.
Typing into the search bar filters the list of recipes to match the search term.

- As a user, I want to share recipes with others so that I can recommend my favorite recipes to friends and family.

Acceptance Criteria:
Each recipe has a 'Share' button.
Clicking the 'Share' button provides a link or method to share the recipe (e.g., via email or social media).
