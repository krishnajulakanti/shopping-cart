import React from 'react'

function SearchBar({ filterText, inStock, handleFilterText, handleInStock }) {
  return (
    <div>
      <form>
        <input type="text" value={filterText} onChange={(e) => handleFilterText(e.target.value)}
          placeholder='Search...' />
        <br />
        <label>
          <input type="checkbox" checked={inStock} onChange={(e) => handleInStock(e.target.checked)} />
          {' '}
          <span>Only show products in stock</span>
        </label>
      </form>
    </div>
  )
}

export default SearchBar