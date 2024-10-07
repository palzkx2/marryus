import React from 'react';
import './WeddingHallItem.css';
import image from '../s_images/weddingHall/1.jpg'
import Numeral from 'numeral';

const WeddingHallItem = ({item}) => {

    const {name,addr,tag,menu,price} = item

    return (
        <>
                <img className='wdImage' src={image} alt='이미지'/>
                <div>{name}</div>
                <div>{addr}</div>
                <div>{tag}</div>
                <div>{menu}</div>
                <div>{Numeral(price).format('0,0')}</div>   
        </>
    );
};

export default WeddingHallItem;