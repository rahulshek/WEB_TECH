document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      const products = data.products || [];
      grid.innerHTML = products.map(p => `
        <div class="rounded-lg bg-white shadow-sm border hover:shadow-md transition-shadow">
          <div class="relative">
            <a href="#">
              <img alt="product" class="w-full h-48 object-cover rounded-t-lg" src="${p.thumbnail}" />
            </a>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors absolute top-2 right-2 bg-green-100 text-green-800">
              ${p.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <a href="#">
                <h3 class="font-semibold text-gray-900 text-sm line-clamp-2 flex-1">${p.title}</h3>
              </a>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm gap-1 text-gray-600">
                <i class="fas fa-map-marker-alt text-xs text-gray-500"></i> ${p.brand}
              </div>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-[#E26038]">$${p.price}</span>
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-xs bg-green-100 text-green-800">${p.category}</div>
              </div>
              <div class="flex items-center justify-between text-sm text-gray-500 pt-2 border-t">
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1"><i class="far fa-eye text-xs"></i> ${p.rating}</span>
                  <span class="flex items-center gap-1"><i class="far fa-heart text-xs"></i> ${p.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>`).join('');
    })
    .catch(err => {
      console.error('Failed to load products', err);
      grid.innerHTML = '<p class="text-red-500">Failed to load products.</p>';
    });
});
