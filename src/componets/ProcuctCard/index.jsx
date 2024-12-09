import classee from "./index.module.css"

const ProductCard = (props) => {
    const { id, title, price, description, category, image, rating, rate, count } = props
    return (
        <a href="#">
            <div className={classee.card}>
            <div className={classee.img}>
            <img src={image} alt="" width="120px" />
            </div>
            <div className={classee.caption}>
            <h5 style={{height:"70px"}}>{title}</h5>
            <p>{category}</p>
            <p>{price}$</p>
            <p>Rate: {rate}</p>
            </div>
        </div>
        </a>
    )
}
export default ProductCard