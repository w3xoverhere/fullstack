import React from "react";
import s from './../../static/css/ProductDetail.module.css'
import ProductPrice from "./ProductPrice";

export const ProductDetail = ({loading, data}) => {
    const hasImg = (product) => {
        return product.img ? <img className={s.productImg} src={product.img}/> : false;
    }

    const joinTags = (tags) => {
        if(tags) {
            return tags.join(', ')
        }
    }

    const formatDate = (date) => {
        let dateCreate = new Date(date);
        return ((dateCreate.getMonth()+1) + '-' + dateCreate.getDate() + '-' + dateCreate.getFullYear() + ' ' +
        dateCreate.getHours() + ':' + dateCreate.getMinutes())
    }

    if (loading) {
        return (
            <div>
                <h1>Product is loading...</h1>
            </div>
        )
    } else {
        return (
            <div className={s.productWrapper}>
                <div className={s.product}>
                    <div className={s.productHeader}>
                        <span className={s.productName}>{data.name}</span>
                        <span className={s.productTags}>{joinTags(data.tags)}</span>
                    </div>
                    <div className={s.productBody}>
                        {hasImg(data)}
                        <p className={s.productParagraph}>{data.content}</p>
                    </div>
                    <span className={s.productCreate}>{
                        formatDate(data.created_at)
                    }</span>
                    <div className={s.productFooter}>
                        <ProductPrice price={data.price} discount={data.discount}/>
                        <div>
                            <button className={s.productButton}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
