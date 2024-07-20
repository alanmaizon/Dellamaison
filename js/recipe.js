class Recipe {
    constructor(title, image, ingredients, steps) {
      this.title = title;
      this.image = image;
      this.ingredients = ingredients;
      this.steps = steps;
    }

    renderRecipeDetails() {
      document.getElementById('recipeTitle').innerText = this.title;
      document.getElementById('recipeImage').src = this.image;
      document.getElementById('recipeImage').alt = this.title + ' Image';
      const ingredientsList = document.getElementById('ingredientsList');
      ingredientsList.innerHTML = '';
      this.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
      });
      const stepsList = document.getElementById('stepsList');
      stepsList.innerHTML = '';
      this.steps.forEach((step, stepIndex) => {
        const li = document.createElement('li');
        const stepId = `${this.title.replace(/\s+/g, '-')}-step-${stepIndex}`;
        const isChecked = localStorage.getItem(stepId) === 'true';
        li.innerHTML = `<input type="checkbox" id="${stepId}" ${isChecked ? 'checked' : ''} onchange="markStepDone('${stepId}')"> <label for="${stepId}">${step}</label>`;
        stepsList.appendChild(li);
      });
    }
  }

  function markStepDone(stepId) {
    const checkbox = document.getElementById(stepId);
    localStorage.setItem(stepId, checkbox.checked);
  }

  function goBack() {
    window.location.href = 'index.html';
  }

  function getRecipeText() {
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (selectedRecipe) {
      return `
Recipe Title: ${selectedRecipe.title}

Ingredients:
${selectedRecipe.ingredients.join('\n')}

Steps:
${selectedRecipe.steps.join('\n')}
      `;
    }
    return '';
  }

  
  function exportRecipe() {
    const recipeText = getRecipeText();
    if (recipeText) {
      const blob = new Blob([recipeText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedRecipe.title.replace(/\s+/g, '_')}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  function shareOnSocialMedia() {
    const recipeText = getRecipeText();
    if (recipeText) {
      if (navigator.share) {
        navigator.share({
          title: 'Recipe',
          text: recipeText,
        }).catch(console.error);
      } else {
        const encodedText = encodeURIComponent(recipeText);
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
        
        const shareOptions = `
          <div id="shareOptions">
            <a href="${facebookUrl}" target="_blank">Share on Facebook</a>
            <a href="${twitterUrl}" target="_blank">Share on Twitter</a>
            <a href="${whatsappUrl}" target="_blank">Share on WhatsApp</a>
          </div>
        `;
        const shareDiv = document.createElement('div');
        shareDiv.innerHTML = shareOptions;
        document.body.appendChild(shareDiv);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (selectedRecipe) {
      const recipe = new Recipe(selectedRecipe.title, selectedRecipe.image, selectedRecipe.ingredients, selectedRecipe.steps);
      recipe.renderRecipeDetails();
    }
  });