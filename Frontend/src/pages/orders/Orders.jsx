import React from 'react'
import "./Orders.scss"
import {Link, useNavigate} from 'react-router-dom'
import {useQuery} from "@tanstack/react-query";
import newRequest from "../../utils/newRequests.js";

const Orders = () => {

    const currentUser=JSON.parse(localStorage.getItem("currentUser"));

    const navigate =useNavigate();

    const { isLoading, error, data } = useQuery({
      queryKey: ["orders"],
      queryFn: () =>
        newRequest
          .get(
            `/orders`
            
          )
          .then((res) => {
            return res.data;
          }),
    });
  
const handleContact = async (order)=>{
  const sellerId =order.sellerId;
  const buyerId =order.buyerId;
  const id =sellerId + buyerId;

  try {
    const res = await newRequest.get(`/conversations/single/${id}`);
    navigate(`/message/${res.data.id}`);
  } catch (err) {
    if(err.response.status === 404){
      const res = await newRequest.post(`/conversations/`, {
        to: currentUser.seller ? buyerId : sellerId,
      });
        navigate(`/message/${res.data.id}`);

    }
  }
  

};
  return (
    <div className='orders'>
      { isLoading ? ("Loading") : error ? ("Error") : (<div className="container">
        <div className="title">
        <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Ttile</th>
            <th>Price</th>
            
            <th>Contact</th>
          </tr>
          { data.map((order) => (
          <tr key={order._id}>
            <td>
              <img className='img' src={order.img} alt="" />
            </td>
            <td>{order.title}</td>
            <td>{order.price}</td>
            
            <td>
              <img className='delete' src="/img/message.png" alt="" onClick={()=>handleContact(order)} />
            </td>
          </tr>))}
        </table>
        
      </div>)}
    </div>
  )
}

export default Orders
