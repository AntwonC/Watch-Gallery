import { useState } from 'react';
import '../styles/Item.css';

interface Props {
    id: number,
    image: string,
    description: string,
    key: number,
}

const Item = ({ id, image, description } : Props) => {
    return (
        <div className="item">
            <img className="item-image"src={image}></img>
            <p className="item-text">{description}</p>
        </div>
    )
};

export default Item;