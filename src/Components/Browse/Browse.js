import Styles from "./Browse.module.css";
import ProductCard from "../ProductCard/ProductCard";
export default function Browse() {
  // Code to get all of the items by filter
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      name: "Item 1",
      price: "$10",
      id: 1,
      freeShipping: true,
      stars: 3,
    },
  ];
  return (
    <main className={Styles.main}>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          freeShipping={item.freeShipping}
          stars={item.stars}
        />
      ))}
    </main>
  );
}
