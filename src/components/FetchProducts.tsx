export default function FetchProducts (product: any) {
    // Create filtering by product: shampoo, conditioner, oil, gel, mousse
    // Figure out Pagination both displaying on UI and calling API
    return (
      <>
      <div className="flex flex-wrap gap-y-4 gap-x-4 p-4 justify-center">
          {product.product.map((i: any) => {
            return (
              <ul key={i.brandName + i.productName} className="flex flex-col bg-white h-[50vh] w-[20vw] p-4 justify-center">
              <img src={i.altImage} width={200} height={200} className="flex mb-4"/>
              <p className="flex">{i.brandName}</p>
              <p className="flex text-left">{i.productName}</p>
            </ul>
            )
      })}
      </div>
  
      </>
    );
}