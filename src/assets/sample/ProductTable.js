import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStock }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (inStock && !product.stocked) return;
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} category={product.category} />
      )
    }
    rows.push(
      <ProductRow product={product} />
    )
    lastCategory = product.category
  });

  return (
    <table style={{ border: '1px solid black', width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable