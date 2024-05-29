import { KeyboardEvent, useState } from "react";
import FetchProducts
 from "../components/FetchProducts";
import { fetchData } from "../components/FetchData";
import Filter from "../components/Filter";

type products = {
    productType: String;
    image: String;
    brandName: String
  }
  
  export interface Products {
    map(arg0: (key: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    options?: Array<products>
  }

export default function SearchBar ( ) {

    const [product, setProducts] = useState<Products>([]);
    const [filter, setFilters] = useState([]);
    const [input, setInput] = useState('')
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          fetchData(setProducts, setFilters, input);
          setInput('');
        }
      };
    return (
        <>
        <div>
        <input
          type="text"
          placeholder="Search for a Product"
          className=" text-white border mt-4 mr-2 rounded-3xl p-1 pl-4 text-sm w-[80vw] hover:border hover:border-[#BD625F]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        </div>
        {product && (
          <>
          <Filter filter={filter} product={product}/>
          <FetchProducts product={product}/>
          </>
        )}
        </>
    )
}