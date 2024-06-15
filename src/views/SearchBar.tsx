import { KeyboardEvent, useState } from "react";
// import FetchProducts from "../components/FetchProducts";
import { fetchData } from "../components/FetchData";

type products = {
  productName: string;
  altImage: string;
  brandName: string;
};

export interface Products {
  map(
    arg0: (key: products) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  options?: Array<products>;
}

export default function SearchBar() {
  const [product, setProducts] = useState<Products>([]);
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);
  const [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await displayResults();
      setDisplay(true);
    }
  };

  const displayResults = async () => {
    console.log(input)
    await fetchData(setProducts, input, page);
  };

  const setNextPage = async () => {
    setPage((page) => page + 1);
    setPrevDisabled(false);
    await displayResults();
  };

  const setPrevPage = async () => {
    if (page === 1) {
      setPrevDisabled(true);
    } else {
      setPage((page) => page - 1);
      await displayResults();
    }
  };

  const total_pages = product.options?.length;
  if (total_pages && total_pages < 60) {
    setNextDisabled(true)
  }
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

      {/* {display && <FetchProducts product={product} />} */}
      <div className="flex justify-center mt-4 gap-x-4">
        <button
          className="flex justify-center bg-white pl-3 pr-3 rounded-md"
          disabled={prevDisabled}
          onClick={setPrevPage}
        >
          Prev
        </button>
        <button
          className="flex justify-center bg-white pl-3 pr-3 rounded-md"
          disabled={nextDisabled}
          onClick={setNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
