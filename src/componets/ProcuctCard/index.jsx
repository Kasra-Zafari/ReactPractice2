import classee from "./index.module.css"

const ProductCard = (props) => {
    const { id, title, price, description, category, image, rating, rate, count } = props
    return (
        <div className={classee.card}>
            <img src={image} alt="" width="120px" />
            <h4>{title}</h4>
            <p>{category}</p>
            <p>{price}$</p>
            <p>Rate: {rate}</p>
        </div>
    )
}
export default ProductCard