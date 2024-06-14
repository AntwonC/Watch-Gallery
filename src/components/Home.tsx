import { useState } from 'react';
import Navbar from './Navbar';
import Item from './Item';
import '../styles/Home.css';

import itemList from '../mocks/itemList.json';


interface WatchItem {
    id: number,
    image: string,
    description: string
}

const Home = () => {
    const getWatchData = (itemList: WatchItem[]) => {
        return (
            <>
            {itemList.map((element: WatchItem) => {
                return (
                    <Item id={element.id} image={element.image} description={element.description} key={element.id}/>
                )
            })
            }
            </>
        )
    }

    
    return (
        <>
            <Navbar />
            {getWatchData(itemList)}
        </>
    )
}

export default Home;