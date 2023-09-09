import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequests.js';

const GigCard = ({item}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest
        .get(
          `/users/${item.userId}`
          
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <Link to={`/gig/${item._id}`} className='link'>
    <div className='gigCard'>
      <img src={item.cover} alt="" />
      <div className="info">
        { isLoading ? (
          "Loading"
          ) : error?(
            "Please Login!"
            ) : (
               <div className="user">
          <img src={data.img || "/img/noavatar.jpg"} alt="" />
          <span>{data.username}</span>
        </div>
        )}
        <p>{item.title}</p>
        <div className="star">
          <img src="./img/star.png" alt="" />
          <span>
              {!isNaN(item.totalStarts/ item.starNumber) &&
                Math.round(item.totalStarts / item.starNumber)}
            </span>
        </div>
      </div>
      <hr/>
      <div className="details">
        <img src="./img/heart.png" alt="" />
        <div className="price">
           <span>STARTING AT</span>
           <h2>₹{item.price}</h2>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default GigCard