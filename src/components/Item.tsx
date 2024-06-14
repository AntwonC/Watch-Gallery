import '../styles/Item.css';

interface Props {
    image: string,
    description: string,
    key: number,
}

const Item = ({ image, description } : Props) => {
    return (
        <div className="item-shadow">
            <div className="item">
                <div className="item-header item-image">
                    <img src={image}></img>
                </div>
                
                <p className="item-text">{description}</p>
            </div>
        </div>
    )
};

export default Item;
///     box-shadow: 10px 5px 5px red;
//background-image: linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);