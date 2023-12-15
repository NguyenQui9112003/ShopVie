function addToCart(productElement) {
    var cartTable = document.getElementById('cartTable');
    var subtotalElement = document.getElementById('subtotal');
    var totalElement = document.getElementById('total');
  
    // Extract product information from the product element
    var productName = productElement.querySelector('h3').innerText;
    var priceString = productElement.querySelector('h5').innerText;
    var price = parseFloat(priceString.replace(/[^\d.]/g, ''));
  
    // Create a new row for the added product
    var newRow = cartTable.insertRow(-1);
    var cellProduct = newRow.insertCell(0);
    var cellQuantity = newRow.insertCell(1);
    var cellSubtotal = newRow.insertCell(2);
  
    // Populate the new row with product information
    cellProduct.innerHTML = `
      <div class="cart-info">
        <div class="card">${productElement.querySelector('img').outerHTML}</div>
        <div>
          <p>${productName}</p>
          <small class="price">Price: ${price.toLocaleString()} VND</small>
        </div>
      </div>`;
    cellQuantity.innerHTML = '<input type="number" value="1" class="productNum">';
    cellSubtotal.innerHTML = `
      <span class="subtotal">${price.toLocaleString()} VND</span>
      <br><button class="removeBtn" onclick="removeProduct(this)">Remove</button>`;
  
    // Update total price
    updateTotalPrice();
  }

  function updateTotalPrice() {
    var productNumInputs = document.querySelectorAll('.productNum');
    var subtotal = 0;
  
    // Calculate subtotal based on the quantity and price of each product
    productNumInputs.forEach(function(input) {
      var price = parseFloat(input.parentNode.previousElementSibling.querySelector('.price').innerText.replace(/[^\d.]/g, ''));
      var subtotalElement = input.parentNode.nextElementSibling.querySelector('.subtotal');
      var productSubtotal = parseInt(input.value) * price;
      subtotalElement.innerText = productSubtotal.toLocaleString() + ' VND';
      subtotal += productSubtotal;
    });
  
    // Update Subtotal, Tax, and Total
    var subtotalElement = document.getElementById('subtotal');
    var totalElement = document.getElementById('total');
  
    if (subtotal > 0) {
      subtotalElement.innerText = subtotal.toLocaleString() + ' VND';
      totalElement.innerText = (subtotal + 13000).toLocaleString() + ' VND'; // Add tax (assuming tax is fixed at 13.000 VND)
    } else {
      // If there are no products, set Subtotal and Total to 0 VND
      subtotalElement.innerText = '0 VND';
      totalElement.innerText = '0 VND';
    }
  }

  function removeProduct(button) {
    var removeButtons = document.querySelectorAll('.removeBtn');

// Lặp qua từng nút và thêm sự kiện click
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Lấy phần tử cha của nút được nhấp vào và xóa nó khỏi DOM
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
        });
    });

    updateTotalPrice(); // Gọi hàm cập nhật tổng giá tiền sau khi xóa sản phẩm
}

removeButton.addEventListener('mousedown', function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
});