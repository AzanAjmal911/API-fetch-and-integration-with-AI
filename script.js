let api = "https://fakestoreapi.com/products";

fetch(api)
  .then(res => res.json())
  .then(products => {
    let container = document.getElementById("product-container");
    container.innerHTML = products.map(p => `
      <div class="col-md-3 col-sm-6">
        <div class="card h-100">
          <img src="${p.image}" class="card-img-top p-3" style="height:200px; object-fit:contain;" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${p.title.slice(0, 25)}...</h6>
            <p class="text-success fw-bold mb-3">$${p.price}</p>
            <button class="btn add-to-cart-btn mt-auto"><i class="fas fa-cart-plus me-2"></i>Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error(err));
