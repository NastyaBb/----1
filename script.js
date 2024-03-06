 // Масив для зберігання товарів
 const cartItems = [];

 // Функція додавання товару
 function addToCart() {
   const productName = document.getElementById('productName').value;
   const productDescription = document.getElementById('productDescription').value;
   const productCategory = document.getElementById('productCategory').value;
   const productPrice = document.getElementById('productPrice').value;
   const productStock = document.getElementById('productStock').value;

   // Перевірка на дублювання
   if (cartItems.some(item => item.productName === productName)) {
    alert('Товар з такою назвою вже існує!');
    return;
  }
   const item = {
    productName,
    productDescription,
    productCategory,
    productPrice,
    productStock,
  };

  cartItems.push(item);

  displayCartItems();

   
  
   // Додавання товару в масив
   cartItems.push({
     name: productName,
     description: productDescription,
     category: productCategory, // Оновлено для збереження значення категорії
     price: productPrice,
     stock: productStock, // Додано поле "stock"
   });

   // Очистка полів форми
   document.getElementById('productName').value = '';
   document.getElementById('productDescription').value = '';
   document.getElementById('productCategory').value = '';
   document.getElementById('productPrice').value = '';
   document.getElementById('productStock').value = '';

   // Виведення каталогу товарів
   displayCartItems();
 }

 // Функція виведення каталогу товарів
 function displayCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.productName}</td>
      <td>${item.productDescription}</td>
      <td>${item.productCategory}</td>
      <td>${item.productPrice}</td>
      <td>${item.productStock}</td>
      <td><button onclick="removeFromCart('${item.productName}')">Видалити</button></td>
    `;

    cartItemsContainer.appendChild(row);
  });
}


function removeFromCart(product) {
  cartItems = cartItems.filter(item => item.product !== product);
  displayCartItems();
}