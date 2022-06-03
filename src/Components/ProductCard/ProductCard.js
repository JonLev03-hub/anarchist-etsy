import Styles from "./ProductCard.module.css";
export default function ProductCard(props) {
  return (
    <div className={Styles.productCard}>
      <img src={props.image} alt={props.name} />
      <button className={Styles.like}>
        <img className={Styles.searchImg} src="./icons/likes.svg" alt="like" />
      </button>
      <div className={Styles.productCardInfo}>
        <p className={Styles.title}>{props.name}</p>
        {props.stars && (
          <div className={Styles.stars}>
            {[...Array(props.stars)].map((star, i) => (
              <img
                key={i}
                className={Styles.star}
                src="./icons/star.svg"
                alt="star"
              />
            ))}
          </div>
        )}
        <h3>{props.price}</h3>
        {props.freeShipping && (
          <p className={Styles.freeShipping}>Free Shipping</p>
        )}
      </div>
    </div>
  );
}
