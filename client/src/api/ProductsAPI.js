import {useState, useEffect} from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    //
    const [callback, setCallback] = useState(false)
    //
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    //---
    // useEffect(() =>{
    //     const getProducts = async () =>{
    //         const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}`)
    //         setProducts(res.data.products)
    //     }
    //     getProducts()
    // }, [callback]) 
    // //---
    

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback, category, sort, search, page])
    
    return {
        products: [products, setProducts],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult],
        //
        callback: [callback, setCallback]
    }
}

export default ProductsAPI
