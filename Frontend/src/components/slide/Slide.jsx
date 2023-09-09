import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import {CategoryData} from "../../data"
import CatCard from '../../components/catCard/CatCard'

const Slide = () => {
  return (
    <div className='slide'>
        <div className="container">
         <h1>Popular services</h1>
            <Slider slidesToShow={4} arrowsScroll={4}>
            {CategoryData.map(card=>(
                    <CatCard item={card} key={card.id}/>
                ))}
            </Slider>

        </div>
      
    </div>
  );
};

export default Slide;
