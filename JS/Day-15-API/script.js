const container = document.getElementById("product-container");
const loader = document.getElementById("loader");

// Fetch API
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    loader.style.display = "none";

    displayProducts(data);
  } catch (error) {
    loader.innerText = "❌ Failed to load products";
    console.error(error);
  }
}

// Display UI
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition";

    card.innerHTML = `
      <img src="${product.image}" 
           class="h-40 mx-auto object-contain mb-4"/>

      <h2 class="text-lg font-bold line-clamp-2">
        ${product.title}
      </h2>

      <p class="text-gray-600 text-sm mt-2 line-clamp-3">
        ${product.description}
      </p>

      <div class="flex justify-between items-center mt-4">
        <span class="text-xl font-semibold text-green-600">
          $${product.price}
        </span>

        <button class="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
          Buy
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Call function
fetchProducts();