import { useMemo, useState } from "react";
import { AutoLogin } from "../components/AutoLogin";


type products = {
  productType: String;
  image: String;
  brandName: String
}

interface Products {
  map(arg0: (key: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  options?: Array<products>
}

export default function Products() {
  AutoLogin();
  const [products, setProducts] = useState<Products>([]);

  // TO DO: figure out useMemo
  // Create filtering by product: shampoo, conditioner, oil, gel, mousse
  // Figure out Pagination both displaying on UI and calling API

  useMemo(() => {
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
    <div className="flex flex-wrap gap-y-4 gap-x-4 p-4 justify-center">
    {products &&
        products.map((i: any) => (
          <div className="flex flex-col bg-white h-[50vh] w-[20vw] p-4 justify-center">
            <img src={i.altImage} key={i.altImage} width={200} height={200} className="flex mb-4"/>
            <p className="flex" key={i.brandName}>{i.brandName}</p>
            <p className="flex text-left" key={i.productName}>{i.productName}</p>
          </div>
        ))}
    </div>

    </>
  );
}
