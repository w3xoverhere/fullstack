import React, {useEffect, useState} from "react";
import Catalog from "../UI/Catalog";
import {useSearchParams} from "react-router-dom";

const CatalogRoute = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasNext, setNext] = useState(false)
    const [hasPrev, setPrev] = useState(false)

    const changeCurPage = (page) => {
        setNext(false);
        setPrev(false);
        setSearchParams({'page': page})
    }

    useEffect(()=>{
        setLoading(true);
        const getAPI = async () => {
            const results = await fetch(`/api/product/?page=${searchParams.get('page')}`).then((response) => {
                if(response.ok == 200)
                    throw Error("Error")
                return response.json()
            }).then((data) => {
                return data
            })
            setProducts(results);
            if(results.next) setNext(true)
            if(results.previous) setPrev(true)
            setLoading(false);
        }
        getAPI();
        return () => {
            setNext(false);
            setPrev(false);
        }
    },[searchParams])

    return (
        <div>
            <Catalog loading={loading} products={products} curPage={searchParams.get('page')} hasNext={hasNext} hasPrev={hasPrev} changeCurPage={changeCurPage}/>
        </div>
    )
}

export default CatalogRoute