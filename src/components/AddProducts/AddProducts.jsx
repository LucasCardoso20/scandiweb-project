import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/add_product_context'

const AddProducts = () => {
  const { handleChange, handleSubmit, switcher, handleSwitcher } = useProductsContext()
  return (
    <main className='container'>
      <nav className="navigation">
        <h1 className="page-title">Product Add</h1>

        <div className="btn-container">
          <button type='submit' className='btn' onClick={handleSubmit}>
            Save
          </button>

          <Link to={'/'}>
            <button type='submit' className='btn'>
              Cancel
            </button>
          </Link>
        </div>
      </nav>

      <form id='product_form' className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="label-container">
            <span id='sku'>SKU</span>
            <span id='name'>Name</span>
            <span id='price'>Price ($)</span>
          </div>

          <div className="inputs-container">
            <input type="text" id='sku' name="SKU" required placeholder='#sku' onChange={handleChange} />
            <input type="text" id='name' name="name" required placeholder='#name' onChange={handleChange} />
            <input type="text" id='price' name="price" required placeholder='#price' onChange={handleChange} />
          </div>
        </div>


        <div id="productType">
          <label htmlFor='switcher'>Type Switcher</label>
          <select name='switcher' value={switcher} onChange={handleSwitcher} id='switcher'>
            <option value='Type switcher'>Type switcher</option>
            <option value='DVD-disc'>DVD-disc</option>
            <option value='Book'>Book</option>
            <option value='Furniture'>Furniture</option>
          </select>
        </div>


        {switcher === 'DVD-disc' && (
          <div id="DVD" className="dvd-form-container">
            <label>
              Size (MB)
              <input type="number" id='size' name="size" placeholder='#size' onChange={handleChange} />
            </label>
            <h4>Please, provide disc space size in MB</h4>
          </div>
        )}

        {switcher === 'Book' && (
          <div id="Book" className="book-form-container">
            <label>
              Weight (KG)
              <input type="number" id='weight' name="weight" placeholder='#weight' onChange={handleChange} />
            </label>
            <h4>Please, provide book size in KG</h4>
          </div>
        )}

        {switcher === 'Furniture' && (
          <div id="Furniture" className="furniture-form-container">
            <label>
              Height (CM)
              <input type="number" id='height' name="height" placeholder='#height' onChange={handleChange} />
            </label>

            <label>
              Width (CM)
              <input type="number" id='width' name="width" placeholder='#width' onChange={handleChange} />
            </label>

            <label>
              Length (CM)
              <input type="number" id='length' name="length" placeholder='#length' onChange={handleChange} />
            </label>
            <h4>Please, provide dimentions in HxWxL</h4>
          </div>
        )}
      </form>
    </main>
  )
}

export default AddProducts