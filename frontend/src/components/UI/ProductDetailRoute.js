import React, {useEffect, useState} from "react";
import {ProductDetail} from "./ProductDetail";
import {useParams} from "react-router-dom";


const ProductDetailRoute = (props) => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    let params = useParams()

    useEffect(() => {
            setLoading(true)
            const getAPI = async () => {
                const results = await fetch(`/api/product/${params.product_id}`).then((response) => {
                    if (response.ok == 200)
                        throw Error("Error")
                    return response.json()
                }).then((data) => {
                    return data
                })
                setProduct(results)
                setLoading(false)
            }
            getAPI();
        },[]
    )


    return (
        <div>
            <ProductDetail loading={loading} data={product}
            />
        </div>
    )
}
export default ProductDetailRoute