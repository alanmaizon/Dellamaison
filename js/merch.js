// Get the modal
var popup = document.getElementById("checkoutPopup");

// Get the button that opens the modal
var btn = document.getElementById("checkoutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

  //Shopping basket
  document.addEventListener('DOMContentLoaded', function () {
  const basketContainer = document.querySelector('.basket-items');
  const totalChargesElement = document.getElementById('total-charges');
  const itemTotalElement = document.getElementById('item-total');
  const feeCharges = 5;
  const postCharges = 3;
  let itemTotal = 0;
  let totalPrice = feeCharges + postCharges;
  let itemCount = 0;

  // Ensure the basket is empty when the page loads
  localStorage.removeItem('basketItems');
  localStorage.removeItem('itemTotal');
  localStorage.removeItem('itemCount');

  function updateTotalCharges() {
    itemTotalElement.textContent = itemTotal.toFixed(2);
    totalPrice = itemTotal + feeCharges + postCharges;
    totalChargesElement.textContent = totalPrice.toFixed(2);
    localStorage.setItem('itemTotal', itemTotal);
    localStorage.setItem('itemCount', itemCount);
  }

  function saveBasket() {
    const basketItems = [];
    basketContainer.querySelectorAll('.basket-item').forEach(item => {
      basketItems.push({
        name: item.querySelector('p').textContent.split(' - ')[1],
        price: parseFloat(item.dataset.price),
        imgSrc: item.querySelector('img').src,
        imgAlt: item.querySelector('img').alt
      });
    });
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }

  function loadBasket() {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    itemTotal = parseFloat(localStorage.getItem('itemTotal')) || 0;
    itemCount = parseInt(localStorage.getItem('itemCount')) || 0;

    basketItems.forEach(item => {
      const basketItem = document.createElement('div');
      basketItem.classList.add('basket-item');
      basketItem.dataset.price = item.price;

      basketItem.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <p><button class="remove-from-basket">Remove</button>
        ${item.name} - €${item.price.toFixed(2)}</p>
      `;

      basketContainer.appendChild(basketItem);
    });

    updateTotalCharges();
    updateBasketButton();
  }

  function addItemToBasket(item, price) {
    const basketItem = document.createElement('div');
    basketItem.classList.add('basket-item');
    basketItem.dataset.price = price;

    const img = item.querySelector('img').cloneNode();
    const name = item.querySelector('h2').textContent;
    const priceText = `€${price}`;

    basketItem.innerHTML = `
      <img src="${img.src}" alt="${img.alt}">
      <p><button class="remove-from-basket">Remove</button>
      ${name} - ${priceText}</p>
    `;

    basketContainer.appendChild(basketItem);

    itemTotal += price;
    itemCount++;
    updateTotalCharges();
    updateBasketButton();
    saveBasket();
  }

  function removeItemFromBasket(basketItem) {
    const price = parseFloat(basketItem.dataset.price);
    basketContainer.removeChild(basketItem);

    itemTotal -= price;
    itemCount--;
    updateTotalCharges();
    updateBasketButton();
    saveBasket();
  }

  document.querySelectorAll('.add-to-basket').forEach(button => {
    button.addEventListener('click', function () {
      const item = button.closest('.merchandise-item');
      const price = parseFloat(item.dataset.price);
      addItemToBasket(item, price);
    });
  });

  basketContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-from-basket')) {
      const basketItem = event.target.closest('.basket-item');
      removeItemFromBasket(basketItem);
    }
  });

  const basketButton = document.querySelector('.basket-button');

  function updateBasketButton() {
    basketButton.textContent = `Basket (${itemCount})`;
  }

  // Load the basket from localStorage when the page loads
  loadBasket();
});
