import Styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={Styles.searchBar}>
      <input className={Styles.searchInput} type="text" placeholder="Search" />
      <button className={Styles.searchBtn}>
        <img
          className={Styles.searchImg}
          src="./icons/Search.svg"
          alt="Search"
        />
      </button>
    </div>
  );
}
