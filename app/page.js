import CardProduct from "./Components/Products/cardProduct";

const  HomePage = async()=> {
  const res = await fetch('http://localhost:5000/products')
  const products = await res.json()
  console.log(products)
  return (
    <>
    <h2>Home Page</h2>
    <div className="grid grid-cols-3 gap-5">
      {
      products.map(product=> <CardProduct key={product.id} product={product}></CardProduct>)
      }
    </div>
    </>
  );
}

export default HomePage;
