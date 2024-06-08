const fetchProductById = async (productId: string) => {
  const response = await fetch(
    `https://black-and-white-server.vercel.app/product/${productId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product data: ${response.status} ${response.statusText}`
    );
  }
  const result = await response.json();

  return result;
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
