// Get the modal
var popup = document.getElementById("checkoutPopup");

// Get the button that opens the modal
var btn = document.getElementById("checkoutBtn","checkoutBtn2");

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

document.addEventListener('DOMContentLoaded', function () {
  const basketContainer = document.querySelector('.basket-items');
  const totalChargesElement = document.getElementById('total-charges');
  const itemTotalElement = document.getElementById('item-total');
  const feeCharges = 5;
  const postCharges = 3;
  let itemTotal = 0;
  let totalPrice = feeCharges + postCharges;
  let itemCount = 0;

  function updateTotalCharges() {
    itemTotalElement.textContent = itemTotal.toFixed(2);
    totalPrice = itemTotal + feeCharges + postCharges;
    totalChargesElement.textContent = totalPrice.toFixed(2);
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
  }

  function removeItemFromBasket(basketItem) {
    const price = parseFloat(basketItem.dataset.price);
    basketContainer.removeChild(basketItem);

    itemTotal -= price;
    itemCount--;
    updateTotalCharges();
    updateBasketButton();
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
  basketButton.textContent = `Basket (${itemCount})`;}
}
)