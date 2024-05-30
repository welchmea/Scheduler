import { useState } from "react";

export default function FetchProducts(product: any) {
  const [filteredProducts, setFilteredProducts] = useState(product.product.products);
  const [filterParam, setFilterParam] = useState<any>([])
  const handleChange = (e:any) => {
    setFilterParam(e.target.value)
    const handleFilters = () => {
      filteredProducts
    }
  }
  console.log(filteredProducts)
  return (
    <>
     <div className="flex flex-row gap-x-8 text-white justify-center p-4">
        <select onChange={handleChange}
        className="rounded-md p-2 border hover:border-[#BD625F]">
          <option>SELECT CATEGORY</option>
          {product.product.categories.map((i: any) => (
            <option value={i.displayName} key={i.displayName + i.nodeStr}>{i.displayName}</option>
          ))}
        </select> 
        <select className="rounded-md p-2 border hover:border-[#BD625F]">
          <option>SELECT BRAND</option>
          {product.product.products.map((i: any) => (
            <option key={i.brandName + i.productId}>{i.brandName}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-y-4 gap-x-4 p-4 justify-center">
        {product.product.products.map((i: any) => {
          return (
            <ul
              key={i.brandName + i.productName}
              className="flex flex-col bg-white h-[50vh] w-[20vw] p-4 justify-center"
            >
              <img
                src={i.altImage}
                width={200}
                height={200}
                className="flex mb-4"
              />
              <p className="flex">{i.brandName}</p>
              <p className="flex text-left">{i.productName}</p>
            </ul>
          );
        })}
      </div> 
    </>
  );
}
