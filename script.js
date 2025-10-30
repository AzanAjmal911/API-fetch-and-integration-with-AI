const Api = "https://fakestoreapi.com/products";

async function getApi() {
  try {
    const response = await fetch(Api);
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = ""; // Clear old data

  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "col-lg-3", "mb-4");

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.image}" class="card-img-top p-3" alt="${item.title}" style="height: 250px; object-fit: contain;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.title.slice(0, 40)}...</h5>
          <p class="card-text text-muted">${item.description.slice(0, 80)}...</p>
          <div class="mt-auto">
            <h6 class="text-success mb-2">$${item.price}</h6>
            <button class="btn btn-primary w-100">Buy Now</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

getApi();
