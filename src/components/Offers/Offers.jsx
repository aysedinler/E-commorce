import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check now</button>

            </div>
            <div className="offers-right"></div>
            <img src={exclusive_image} alt="" />
        </div>
    )
}

export default Offers