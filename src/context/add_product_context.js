import React, { useEffect, useContext, useState } from 'react'
import { data } from '../data/data'

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const getLocalStorage = () => {
        let product = localStorage.getItem('product')
        if(product){
            return (product = JSON.parse(localStorage.getItem('product')))
        }else{
            return []
        }
    }

    const [formValues, setFormValues] = useState({})
    const [products, setProducts] = useState(data)
    const [productsAdded, setProductsAdded] = useState(getLocalStorage())
    const [ids, setIds] = useState([])
    const [switcher, setSwitcher] = useState('Type Switcher')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        const { name, SKU, price, size, weight, height, width, length } = formValues

        let newItem = {
            id: new Date().getTime(),
            name: name, SKU: SKU,
            price: price,
        }

        if (switcher === 'DVD-disc') {
            newItem = {
                id: new Date().getTime(),
                name: name, SKU: SKU,
                price: price,
                size: size,
            }
        }

        if (switcher === 'Book') {
            newItem = {
                id: new Date().getTime(),
                name: name, SKU: SKU,
                price: price,
                weight: weight,
            }
        }

        if (switcher === 'Furniture') {
            newItem = {
                id: new Date().getTime(),
                name: name, SKU: SKU,
                price: price,
                height: height,
                width: width,
                length: length,
            }
        }

        e.preventDefault()
        setProductsAdded([...productsAdded, newItem])
    }

    const handleIds = (e) => {
        const id = e.target.id
        const newItem = id

        setIds([...ids, newItem].map((item) => Number(item)))
    }

    const handleDelete = () => {
        const localProducts = products.filter((item) => !ids.includes(item.id))

        const newArray = productsAdded.filter((item) => !ids.includes(item.id))
        
        setProducts(localProducts)
        setProductsAdded(newArray)
    }

    const handleSwitcher = (e) => {
        const value = e.target.value
        setSwitcher(value)
    }

    useEffect(() => {
      localStorage.setItem('product', JSON.stringify(productsAdded))
    }, [productsAdded])
    

    return (
        <ProductsContext.Provider value={{
            products,
            handleChange,
            formValues,
            handleSubmit,
            productsAdded,
            handleIds,
            handleDelete,
            switcher,
            handleSwitcher,
        }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}