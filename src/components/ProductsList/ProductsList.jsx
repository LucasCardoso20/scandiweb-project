import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/add_product_context'

const ProductsList = () => {
  const { productsAdded, handleIds, handleDelete, products} = useProductsContext()

  return (
    <main className='container'>
      {console.log(productsAdded)}
      <nav className='navigation'>
        <h1 className='page-title'>
          Product List
        </h1>

        <div className="btn-container">
          <Link to="addproduct">
            <button className="btn">
              ADD
            </button>
          </Link>

          <button id="delete-btn" className="delete-product-btn btn" onClick={handleDelete}>
            MASS DELETE
          </button>
        </div>
      </nav>

      <div className="product-list">
        {products.map((product) => (
          <article key={product.id} className="product-container">
            <input type="checkbox" className='delete-checkbox' id={product.id} onChange={handleIds} />
            <ul>
              <li id="sku">{product.SKU}</li>
              <li>{product.name}</li>
              <li>{product.price}$</li>
              <li>
                {product.size && `${product.size} MB`}
                {product.weight && `${product.weight} KG`}
                {product.dimention && product.dimention}
              </li>
            </ul>
          </article>
        ))}

        {productsAdded?.map((product) => (
          <article key={product.id} className="product-container">
            <input type="checkbox" className='delete-checkbox' id={product.id} onChange={handleIds} />

            <ul>
              <li>{product.SKU}</li>
              <li>{product.name}</li>
              <li>${product.price}</li>
              <li>
                {product.size && `${product.size} MB`}
                {product.weight && `${product.weight} KG`}
                {product.height && `${product.height}x${product.width}x${product.length}`}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}

export default ProductsList