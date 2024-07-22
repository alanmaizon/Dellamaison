document.addEventListener('DOMContentLoaded', function () {

  //Slide messages
  const messages = document.querySelectorAll('.slide-message');
  let currentSlide = 0;
  const interval = 6000; // Time each slide is displayed
  const transitionDuration = 1000; // Time it takes for slide transition

  function showNextMessage() {
    // Hide the current slide
    messages[currentSlide].classList.remove('active');
    messages[currentSlide].classList.add('out');

    // Update the current slide index
    currentSlide = (currentSlide + 1) % messages.length;

    // Show the next slide
    setTimeout(() => {
      messages[currentSlide].classList.remove('out');
      messages[currentSlide].classList.add('active');
    }, transitionDuration);
  }

  // Initialize the first slide
  messages[currentSlide].classList.add('active');

  // Set interval to show the next message automatically
  setInterval(showNextMessage, interval);

  //Popup newsletter
  setTimeout(function() {
    document.getElementById('newsletter-popup').style.display = 'flex';
  }, 3000);
});

function closePopup() {
  document.getElementById('newsletter-popup').style.display = 'none';
}

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  if (validateEmail(email)) {
    alert('Thank you for signing up!');
    closePopup();
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

//Gallery Item clickeable button

class Recipe {
  constructor(title, image, ingredients, steps) {
    this.title = title;
    this.image = image;
    this.ingredients = ingredients;
    this.steps = steps;
  }

  renderGalleryItem() {
    return `
      <div class="grid-item">
        <h4>${this.title}</h4>
        <img src="${this.image}" alt="${this.title} Image" class="image">
        <div class="middle">
          <button onclick="recipeManager.showRecipeDetails('${this.title}')">View Recipe</button>
        </div>
      </div>
    `;
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

class RecipeManager {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe.title, recipe.image, recipe.ingredients, recipe.steps));
    this.currentPage = 0;
    this.recipesPerPage = 3;
    this.currentFilteredRecipes = this.recipes;
  }

  showGallery() {
    const galleryItems = document.getElementById('galleryItems');
    galleryItems.innerHTML = '';
    const start = this.currentPage * this.recipesPerPage;
    const end = start + this.recipesPerPage;
    const paginatedRecipes = this.currentFilteredRecipes.slice(start, end);

    paginatedRecipes.forEach(recipe => {
      galleryItems.innerHTML += recipe.renderGalleryItem();
    });

    this.updateNavigationButtons();
  }

  updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = this.currentPage === 0;
    nextBtn.disabled = (this.currentPage + 1) * this.recipesPerPage >= this.currentFilteredRecipes.length;
  }

  showNextPage() {
    if ((this.currentPage + 1) * this.recipesPerPage < this.currentFilteredRecipes.length) {
      this.currentPage++;
      this.showGallery();
    }
  }

  showPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.showGallery();
    }
  }

  showRecipeDetails(title) {
    const recipe = this.recipes.find(recipe => recipe.title === title);
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    window.location.href = 'recipe.html';
  }

  filterRecipes(searchTerm) {
    this.currentFilteredRecipes = this.recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    this.currentPage = 0;
    this.showGallery();

    const searchResultsMessage = document.getElementById('searchResultsMessage');
    if (this.currentFilteredRecipes.length === 0) {
      searchResultsMessage.style.display = 'block';
    } else {
      searchResultsMessage.style.display = 'none';
    }
  }
}

const recipes = [
  {
    title: "Pancakes",
    image: "img/food.jpg",
    ingredients: ["1 cup flour", "1 tbsp sugar", "1 tsp baking powder", "1/2 tsp salt", "1 cup milk", "1 egg", "2 tbsp melted butter"],
    steps: ["Mix dry ingredients.", "Add wet ingredients and mix until smooth.", "Heat a non-stick pan over medium heat.", "Pour batter into the pan.", "Cook until bubbles form, then flip and cook until golden."]
  },
  {
    title: "Spaghetti Carbonara",
    image: "img/carbonara.jpg",
    ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "50g parmesan", "2 plump garlic cloves", "50g unsalted butter"],
    steps: ["Boil the spaghetti.", "Fry the pancetta with the garlic.", "Beat the eggs with the cheese.", "Combine everything off the heat."]
  },
  {
    title: "Caesar Salad",
    image: "img/caesar_salad.jpg",
    ingredients: ["1 large romaine lettuce", "2 slices bread", "1 clove garlic", "50g parmesan cheese", "1 egg", "2 tbsp olive oil", "1 tsp Worcestershire sauce"],
    steps: ["Chop the lettuce.", "Make croutons from the bread.", "Prepare the dressing with garlic, egg, oil, and sauce.", "Combine and top with parmesan."]
  },
  {
    title: "Chicken Curry",
    image: "img/chicken_curry.jpg",
    ingredients: ["1 kg chicken", "2 onions", "3 tomatoes", "2 tbsp curry powder", "200ml coconut milk", "1 tbsp ginger-garlic paste", "Fresh coriander"],
    steps: ["Saute onions until golden.", "Add ginger-garlic paste.", "Add tomatoes and cook until soft.", "Add chicken and curry powder.", "Pour in coconut milk and simmer until cooked."],
  },
  {
    title: "Guacamole",
    image: "img/guacamole.jpg",
    ingredients: ["3 avocados", "1 lime", "1 tsp salt", "1/2 cup diced onion", "3 tbsp chopped cilantro", "2 roma tomatoes", "1 tsp minced garlic"],
    steps: ["Mash the avocados.", "Mix in the lime juice and salt.", "Fold in onions, tomatoes, cilantro, and garlic.", "Serve immediately."],
  },
  {
    title: "French Toast",
    image: "img/french_toast.jpg",
    ingredients: ["2 eggs", "1/2 cup milk", "1 tsp vanilla extract", "1 tsp ground cinnamon", "6 slices bread", "Butter for frying"],
    steps: ["Beat the eggs, milk, vanilla, and cinnamon.", "Dip the bread in the mixture.", "Fry in butter until golden on both sides.", "Serve hot."],
  },
  {
    title: "Vegan Pad Thai",
    image: "img/pad_thai.jpg",
    ingredients: ["200g rice noodles", "1 cup tofu, cubed", "1 cup bean sprouts", "1/2 cup chopped peanuts", "3 cloves garlic, minced", "2 tbsp soy sauce", "2 tbsp tamarind paste", "1 tbsp maple syrup", "1 lime, juiced"],
    steps: ["Soak rice noodles in hot water until soft.", "Stir-fry tofu and garlic until golden.", "Add noodles, soy sauce, tamarind paste, and maple syrup.", "Toss in bean sprouts and peanuts, squeeze lime juice, and serve."],
  },
  { 
    title: "Chickpea Tikka Masala",
    image: "img/tikka_masala.jpg",
    ingredients: ["1 can chickpeas, drained", "1 onion, chopped", "3 tomatoes, pureed", "1/2 cup coconut milk", "2 tbsp tomato paste", "2 tbsp garam masala", "1 tbsp ground cumin", "1 tbsp turmeric", "1 tbsp olive oil"],
    steps: ["Sauté onion until soft.", "Add spices and tomato paste, cook until fragrant.", "Stir in chickpeas, tomato puree, and coconut milk.", "Simmer until thickened, serve with rice or naan."],
  },
  { 
    title: "Vegan Sushi Rolls",
    image: "img/sushi_rolls.jpg",
    ingredients: ["1 cup sushi rice", "4 nori sheets", "1 avocado, sliced", "1/2 cucumber, julienned", "1/2 carrot, julienned", "1/2 red bell pepper, sliced", "2 tbsp rice vinegar", "1 tbsp sugar", "1 tsp salt"],
    steps: ["Cook rice and season with vinegar, sugar, and salt.", "Place nori sheet on bamboo mat, spread rice.", "Layer vegetables, roll tightly, seal with water.", "Slice and serve with soy sauce and wasabi."],
  },
  { 
    title: "Lentil Pie",
    image: "img/shepherds_pie.jpg",
    ingredients: ["2 cups cooked lentils", "1 onion, diced", "2 carrots, diced", "1 cup peas", "2 cloves garlic, minced", "1 cup vegetable broth", "2 tbsp tomato paste", "2 tbsp olive oil", "4 cups mashed potatoes"],
    steps: ["Sauté onion and garlic in olive oil until soft.", "Add carrots, peas, lentils, broth, and tomato paste.", "Simmer until thickened, transfer to baking dish.", "Top with mashed potatoes, bake until golden."],
  },
  { 
    title: "Quinoa Stuffed Bell Peppers",
    image: "img/stuffed_peppers.jpg",
    ingredients: ["4 bell peppers, halved", "1 cup quinoa, cooked", "1 can black beans, drained", "1 cup corn kernels", "1/2 cup salsa", "1 tsp cumin", "1/2 tsp chili powder", "1/2 cup vegan cheese, shredded", "1/4 cup fresh cilantro, chopped"],
    steps: ["Preheat oven to 375°F (190°C).", "Mix quinoa, beans, corn, salsa, and spices.", "Stuff peppers with mixture, top with cheese.", "Bake for 25-30 minutes until peppers are tender."],
  },
  {
    title: "Vegan Mushroom Risotto",
    image: "img/mushroom_risotto.jpg",
    ingredients: ["1 cup Arborio rice", "1 onion, finely chopped", "3 cups vegetable broth", "1/2 cup white wine", "1 lb mushrooms, sliced", "2 tbsp nutritional yeast", "2 tbsp vegan butter", "1/4 cup chopped parsley", "Salt and pepper to taste"],
    steps: ["Sauté onion in butter until translucent.", "Add mushrooms, cook until browned.", "Stir in rice, cook for 1 minute.", "Add wine, cook until absorbed, then add broth slowly until rice is creamy."],
  },
  {
    title: "Vegan Thai Green Curry",
    image: "img/green_curry.jpg",
    ingredients: ["1 can coconut milk", "1 block tofu, cubed", "1 cup broccoli florets", "1 cup sliced bell peppers", "1 cup sliced zucchini", "2 tbsp green curry paste", "1 tbsp soy sauce", "1 tbsp brown sugar", "1 tbsp lime juice"],
    steps: ["Simmer coconut milk with curry paste.", "Add tofu, vegetables, soy sauce, and sugar.", "Cook until vegetables are tender.", "Stir in lime juice, serve over rice."]
  },
  {
    title: "Mushroom Stroganoff",
    image: "img/stroganoff.jpg",
    ingredients: ["8 oz pasta of choice", "1 lb mushrooms, sliced", "1 onion, diced", "3 cloves garlic, minced", "1 cup vegetable broth", "1 cup cashew cream (blend soaked cashews with water)", "2 tbsp soy sauce", "2 tbsp nutritional yeast", "1 tbsp olive oil"],
    steps: ["Cook pasta according to package instructions.", "Sauté onion and garlic in olive oil until soft.", "Add mushrooms, cook until browned.", "Stir in broth, cashew cream, soy sauce, and nutritional yeast, simmer until thickened."],
  },
  {
    title: "Vegan Chickpea Curry",
    image: "img/chickpea_curry.jpg",
    ingredients: ["1 can chickpeas, drained", "1 onion, chopped", "2 tomatoes, chopped", "1 cup coconut milk", "2 tbsp curry powder", "1 tbsp olive oil", "1 tbsp ginger, minced", "1 tbsp maple syrup", "Salt and pepper to taste"],
    steps: ["Sauté onion and ginger in olive oil until translucent.", "Add tomatoes, cook until soft.", "Stir in curry powder, coconut milk, chickpeas, and maple syrup.", "Simmer until flavors meld, serve over rice."],
  }
];

const recipeManager = new RecipeManager(recipes);

document.getElementById('searchBar').addEventListener('input', (e) => {
  recipeManager.filterRecipes(e.target.value);
});

// Initialize gallery
recipeManager.showGallery();


//Contact form

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
