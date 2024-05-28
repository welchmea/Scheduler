import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    // using sephora api to generate a list of products
    async function fetchData() {
      const url =
        "https://sephora.p.rapidapi.com/us/products/v2/search?q=shampoo&pageSize=60&currentPage=1";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9142e296b9msh3a7e92599bf5b97p189170jsn32c9733b16dd",
          "X-RapidAPI-Host": "sephora.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {products &&
        products.map((i: any) => (
          <div className="bg-white gap-x-4">
            <img src={i.altImage} />
            <p>{i.brandName}</p>
            <p>{i.productName}</p>
          </div>
        ))}
    </>
  );
}
