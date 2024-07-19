function validateContactForm() {
  const message = document.getElementById('message').value;
  const wordCount = message.trim().split(/\s+/).length;

  if (wordCount > 20) {
    alert("Message must be no longer than 20 words.");
    return false;
  }

  alert("Contact form submitted successfully!");
  document.getElementById('contactForm').reset();
  return false;
}

function validateRecipeForm() {
  const title = document.getElementById('recipeTitle').value;
  const image = document.getElementById('recipeImage').files[0];
  const ingredients = document.getElementById('recipeIngredients').value;
  const steps = document.getElementById('recipeSteps').value;

  if (!title || !image || !ingredients || !steps) {
    alert("All recipe fields are required.");
    return false;
  }

  alert("Recipe form submitted successfully!");
  document.getElementById('recipeForm').reset();
  return false;
}
