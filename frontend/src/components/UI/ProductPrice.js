import React from "react";
import s from './../../static/css/ProductPrice.module.css'


const ProductPrice = (props) => {
        if(props.discount) {
            let oldPrice = props.price;
            let newPrice = props.price - props.price*(props.discount/100);
            return (
                <div className={s.price}>
                    <span className={s.oldPrice}>{oldPrice}</span>
                    <span className={s.newPrice}>{newPrice}$</span>
                </div>
            )
        }
        return (
            <div className={s.price}>
                {props.price}$
            </div>
        )
}

export default ProductPrice;