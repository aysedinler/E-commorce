import React from 'react'
import "./Item.css"

// Null Check
// name && 'Name provided'
// name || 'No name provided'

const Item = ({ name, image, newPrice, oldPrice }) => {
    return (
        <div className='item'>
            <img src={image} alt="" />
            <p>{name || 'Name yok'}</p>
            <div className="item prices">
                <div className="item-price-new">
                    $ {newPrice || 0.0}
                </div>
                <div className="item-price-old">
                    $ {oldPrice || 0.0}
                </div>
            </div>
        </div>
    )
}

export default Item