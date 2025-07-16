import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

// Null Check
// name && 'Name provided'
// name || 'No name provided'

// const Item = ({ name, image, newPrice, oldPrice }) => {
//     return (
//         <div className='item'>
//         <Link to={`/product/${props.id}`}><img src={image} alt="" /></Link>    
//             <p>{name || 'Name yok'}</p>
//             <div className="item prices">
//                 <div className="item-price-new">
//                     $ {newPrice || 0.0}
//                 </div>
//                 <div className="item-price-old">
//                     $ {oldPrice || 0.0}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Item
const Item = ({ id, name, image, newPrice, oldPrice }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name || 'No name'} />
      </Link>
      <p>{name || 'Name yok'}</p>
      <div className="item_prices">
        <div className="item-price-new">${newPrice || 0.0}</div>
        <div className="item-price-old">${oldPrice || 0.0}</div>
      </div>
    </div>
  )
}
export default Item



