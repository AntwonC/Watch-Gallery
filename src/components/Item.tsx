import { useState } from 'react';

interface Props {
    id: number,
    image: string,
    description: string,
    key: number,
}

const Item = ({ id, image, description } : Props) => {
    return (
        <>
            <img src={image}></img>
            <p>{description}</p>
        </>
    )
};

export default Item;