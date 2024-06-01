export async function fetchData(setProducts: any, input: any, page: any) {

  const url = `https://shazam.p.rapidapi.com/search?term=${input}&locale=en-US&offset=${page}&limit=50`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9142e296b9msh3a7e92599bf5b97p189170jsn32c9733b16dd',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setProducts(result)
  } catch (error) {
    console.error(error);
  }
  // const url =
  //   `https://sephora.p.rapidapi.com/us/products/v2/search?q=${input}&pageSize=60&currentPage=${page}`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key":
  //       "9142e296b9msh3a7e92599bf5b97p189170jsn32c9733b16dd",
  //     "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  //   },
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   setProducts(result);
  //   return;

  // } catch (error) {
  //   console.error(error);
  // }
  // return;
}
