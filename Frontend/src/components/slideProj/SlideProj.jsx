import React from 'react'
import "./SlideProj.scss"
import Slider from 'infinite-react-carousel';
import {projectsData} from "../../data"
import ProjectCard from '../projectCard/ProjectCard';



const SlideProj = () => {  
  return (
    <div className='slidee'>
        <div className="container">
        
                <h1>Inspiring work made on FrameLancer</h1>
            <Slider slidesToShow={3} arrowsScroll={3}>
                {projectsData.map(card=>(
                    <ProjectCard item={card} key={card.id}/>
                ))}
            </Slider>

        </div>
      
    </div>
  );
};

export default SlideProj;
