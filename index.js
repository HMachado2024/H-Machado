const productList = [
    { id: 1, name: 'Producto 1', price: 100, image: 'image1.jpg' },
    { id: 2, name: 'Producto 2', price: 200, image: 'image2.jpg' },
    // ... más productos
];

const productListElement = document.getElementById('productList');

productList.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    const imageElement = document.createElement('img');
    imageElement.src = product.image;

    const productInfoElement = document.createElement('div');

    const nameElement = document.createElement('h2');
    nameElement.textContent = product.name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Precio: $${product.price}`;

    productInfoElement.appendChild(nameElement);
    productInfoElement.appendChild(priceElement);

    productElement.appendChild(imageElement);
    productElement.appendChild(productInfoElement);

    productListElement.appendChild(productElement);
});