// src/components/NewCollections.jsx
import React from 'react';
import "./NewCollections.css";
import new_collection from "../Assets/new_collections.js";  // Dosyanın gerçek uzantısını eklemeyi unutma
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, index) => (
                    // key olarak ya index kullan ya da item.id
                    <Item
                        key={item.id ?? index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        newPrice={item.new_price}
                        oldPrice={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewCollections;
