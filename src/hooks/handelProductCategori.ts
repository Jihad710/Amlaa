const fetchProductByCategori = async (pValue: string) => {
  const response = await fetch(
    `https://black-and-white-server.vercel.appcollection/?${pValue}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  return await response.json();
};

const handleProductCategori = async (pCategori: string) => {
  try {
    const productData = await fetchProductByCategori(pCategori);
    return productData;
  } catch (error) {
    console.error("Error while buying product:", error);
    throw error;
  }
};

export { handleProductCategori };
