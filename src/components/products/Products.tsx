import Card from "../shared/Card";

const fetchProducts = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: {
      revalidate: 180,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/products?populate=*",
      options
    );
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div>
      <Card products={products} />
    </div>
  );
}
