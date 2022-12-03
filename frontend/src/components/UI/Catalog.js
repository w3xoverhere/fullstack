import React, {useState} from "react";
import ProductElement from "./ProductElement";
import Pagination from "./Pagination";

const Catalog = ({products, loading, curPage, hasNext, hasPrev, changeCurPage}) => {
    if(loading) {
        return <h2>Products loading...</h2>
    }
    else if(products.results) return (
        <div>
            {products.results.map(product=>{
                return (<ProductElement key={product.id} data={product}/>)
            })}
            <Pagination hasNext={hasNext} hasPrev={hasPrev} curPage={curPage} changeCurPage={changeCurPage}/>
        </div>
    )

}

export default Catalog