// import { useState } from "react";

export default function FetchProducts(product: string) {
  console.log(product)
  // console.log(product.product.products)
  // console.log(product.product.products[0].displayName)
  // // const [filteredProducts, setFilteredProducts] = useState(product.product.products);
  // const [filterParam, setFilterParam] = useState<any>([])

  // const handleChange = (e:any) => {
  //   console.log(e.target.value)
  // }
  // return (
  //   <>
  //    <div className="flex flex-row gap-x-8 text-white justify-center p-4">
  //       <select onClick={handleChange}
  //       className="rounded-md p-2 border hover:border-[#BD625F]">
  //         <option>SELECT CATEGORY</option>
  //         {product.product.filters.map((i: any, key:any) => ( i &&
  //           <option value={i.filterKey} key={key}>{i.filterKey}</option>
  //         ))}
  //       </select> 
  //       <select className="rounded-md p-2 border hover:border-[#BD625F]">
  //         <option>SELECT BRAND</option>
  //         {product.product.products.map((i: any) => (
  //           <option key={i.brandName + i.productId}>{i.brandName}</option>
  //         ))}
  //       </select>
  //     </div>
  // <div className="flex flex-wrap gap-y-4 gap-x-4 p-4 justify-center">
  //       {product.product.products.map((i: any) => {
  //         return (
  //           <ul
  //             key={i.brandName + i.productName}
  //             className="flex flex-col bg-white h-[50vh] w-[20vw] p-4 justify-center"
  //           >
  //             <img
  //               src={i.altImage}
  //               width={200}
  //               height={200}
  //               className="flex mb-4"
  //             />
  //             <p className="flex">{i.brandName}</p>
  //             <p className="flex text-left">{i.productName}</p>
  //           </ul>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
}
