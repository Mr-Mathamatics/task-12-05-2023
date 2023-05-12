import { useEffect, useMemo, useState } from "react"
import { ProductBox } from "./productBox"

export const ProductList = () => {
    const [productList, setProductList] = useState([])
    const fatchApi = async () => {
        const data = await fetch('https://dummyjson.com/products').then(res => res.json()).then(res => res).catch(error => [])
        setProductList(data.products)
    }
    useEffect(() => {
        fatchApi()
    }, [])
    return (
        <div className="productSide">
            <h2>Product List</h2>
            <ul className="productUl">
                {productList.map((item, index) => <ProductBox item={item} key={index} />)}
            </ul>
        </div>
    )
}