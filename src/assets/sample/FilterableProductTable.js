import React, { useState } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function FilterableProductTable() {

  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false);

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid red', }}>
      <div>
        <SearchBar filterText={filterText} inStock={inStock} handleFilterText={setFilterText} handleInStock={setInStock} />
        <ProductTable products={PRODUCTS} filterText={filterText} inStock={inStock} handleFilterText={setFilterText} handleInStock={setInStock} />
      </div>
    </div>
  )
}

export default FilterableProductTable