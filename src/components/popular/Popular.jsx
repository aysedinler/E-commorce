import React from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image= {item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular