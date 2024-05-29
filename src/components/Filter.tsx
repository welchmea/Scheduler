export default function Filter(filter: any, product: any) {
  console.log(product.product)
  return (
    <>
      <div className="flex flex-row gap-x-8 text-white justify-center p-4">
        <select className="rounded-md p-2 border hover:border-[#BD625F]">
          <option>SELECT CATEGORY</option>
          {filter.filter && filter.filter.map((i:any) => <option key={i.displayName + i.nodeStr}>{i.displayName}</option>)}
        </select>
        <select className="rounded-md p-2 border hover:border-[#BD625F]">
          <option>SELECT BRAND</option>
          {/* {product && product.map((i:any) => <option key={i.brandName}>{i.brandName}</option>)} */}
        </select>
      </div>
    </>
  );
}
