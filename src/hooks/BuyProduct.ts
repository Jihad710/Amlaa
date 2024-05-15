const fetchProductById = async (productId: string) => {
  const response = await fetch(
    `http://localhost:5000/collection/allProducts/${productId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  return await response.json();
};

const handleBuyProduct = async (productId: string) => {
  try {
    const productData = await fetchProductById(productId);
    return productData;
  } catch (error) {
    console.error("Error while buying product:", error);
    throw error;
  }
};

export { handleBuyProduct };
