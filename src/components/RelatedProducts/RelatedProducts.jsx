import React from 'react'
import "./RelatedProducts.css"
import data_product from "../Assets/data"
import Item from "../Item/Item"

const RelatedProducts = () => {
    return (
        <div className='relatedproduct'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, index) => {
                    return <Item key={item.id ?? index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        newPrice={item.new_price}
                        oldPrice={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts