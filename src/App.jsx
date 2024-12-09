import Header from "./componets/Header"
import ProductCard from "./componets/ProcuctCard"
import PRODUCTS from "././data/products"



const App = () => {
  return (
    <>
      <Header />
      <h1 style={{marginLeft:"5rem"}}>All Products</h1>
      <section className="row">
        {PRODUCTS.map((product)=>{
          return(
            <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            rate={product.rating.rate}
            />
          )
        })}
      </section>
    </>
  )
}
export default App