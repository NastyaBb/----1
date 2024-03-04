 // Масив для зберігання товарів
 const products = [];

 // Функція додавання товару
 function addProduct() {
   const productName = document.getElementById('productName').value;
   const productDescription = document.getElementById('productDescription').value;
   const productCategory = document.getElementById('productCategory').value;
   const productPrice = document.getElementById('productPrice').value;
   const productStock = document.getElementById('productStock').value;

   // Перевірка на дублювання
   if (products.some(product => product.name === productName)) {
     alert('Товар з такою назвою вже існує!');
     return;
   }

   // Додавання товару в масив
   products.push({
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
   displayProductList();
 }

 // Функція виведення каталогу товарів
 function displayProductList() {
   const productListContainer = document.getElementById('productList');
   productListContainer.innerHTML = '';

   products.forEach(product => {
     const productCard = document.createElement('div');
     productCard.innerHTML = `<strong>${product.name}</strong><br>Опис: ${product.description}<br>Категорія: ${product.category}<br>Кількість на складі: ${product.stock}<br>Ціна: ${product.price} грн<br><br>`;
     productListContainer.appendChild(productCard);
   });
 }