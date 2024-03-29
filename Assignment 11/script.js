
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
  
  data.forEach(function(product) {
    
    var card = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('productCards').innerHTML += card;
  });
});