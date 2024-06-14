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
            <div className="items-grid-container">
            {itemList.map((element: WatchItem) => {
                return (
                    <Item  image={element.image} description={element.description} key={element.id}/>
                )
            })
            }
            </div>
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

/* 
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

*/