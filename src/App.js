import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";
import Card from "./components/card/card.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [products, setproducts] = useState([]);
  const [filteredproducts, setFilterproducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((items) => setproducts(items));
  }, []);

  useEffect(() => {
    const newFilteredproducts = products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });

    setFilterproducts(newFilteredproducts);
  }, [products, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> List Of Products </h1>

      <SearchBox
        className="products-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search products"
      />
      <CardList products={filteredproducts} />
    </div>
  );
};

export default App;
