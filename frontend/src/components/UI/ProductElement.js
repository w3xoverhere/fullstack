import React from "react";
import {Link} from "react-router-dom";
import ProductPrice from "./ProductPrice";
import s from './../../static/css/ProductElement.module.css'


const ProductElement = (props) => {
    const has_image = () => {
        if (props.data.img) {
            return <img className={s.productCardImg} src={props.data.img} alt="-"/>
        }
    }

    const formatDate = (date) => {
        let dateCreate = new Date(date);
        return ((dateCreate.getMonth()+1) + '-' + dateCreate.getDate() + '-' + dateCreate.getFullYear() + ' ' +
            dateCreate.getHours() + ':' + dateCreate.getMinutes())
    }

    return (
        <div className={s.productCard}>
            <div className={s.productCardHeader}>
                <span className={s.productCardName}>{props.data.name}</span>
                <span className={s.productCardTags}>{props.data.tags.join(', ')}</span>
            </div>
            <div className={s.productCardBody}>
                {has_image()}
                <p className={s.productCardContent}>
                    {props.data.content}
                </p>
            </div>
            <span className={s.productCardCreate}>{formatDate(props.data.created_at)}</span>
            <div className={s.productCardFooter}>
                <ProductPrice price={props.data.price} discount={props.data.discount}/>
                <div className={s.productCardButtons}>
                    <Link className={s.productCardButton} key={props.data.id}
                          to={`/catalog/${props.data.id}`}>See
                        more</Link>
                    <button className={s.productCardButton}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductElement;