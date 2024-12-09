import classes from "./index.module.css"

const ProductCard = (props) => {
    const { id, title, price, description, category, image, rating, rate, count } = props
    return (
        <a href="#">
            <div className={classes.card}>
                <div className={classes.img}>
                    <img src={image} alt="" width="120px" />
                </div>
                <div className={classes.caption}>
                    <h5 style={{ height: "50px" }}>{title}</h5>
                    <p>{category}</p>
                    <p>{price}$</p>
                    <p>Rate: {rate}</p>
                </div>
            </div>
        </a>
    )
}
export default ProductCard