export async function getProducts(category) {
    const response = await fetch(`http://localhost:3000/products?category=${category}`);
    if (response.ok) return response.json();
    throw response;
}

export async function getProduct(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    if (response.ok) return response.json();
    throw response;
}
