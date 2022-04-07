import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./profile.module.css";

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(()=> {
        axios({
            baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
            method: "GET",
            url: `orders/details/${id}`,
          })
            .then((res) => {
              const result = res.data.data;
              setOrder(result);
            })
            .catch((err) => {
              console.log(err);
            });
          },[])

          console.log(order, id);
  return (
    <main className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}>
    <Navbar />
    <div className="d-flex w-100 flex-fill">
        <Sidebar />
        <div className={`w-75 bg-light profileBox p-3`}>
            <div className={`${styles.profilebox} mt-5 ms-5 p-3 bg-white`}>
                <h5>My Order's Detail</h5>
                {/* <div className="">
              <ul className='nav nav-tabs'>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>All Items</Link></li>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Not yet paid</Link></li>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Packed</Link></li>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Sent</Link></li>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Completed</Link></li>
                  <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Order cancel</Link></li>
              </ul>
          </div> */}
                {order?.listItems?.map((item, index) => {
                    return (
                        <div 
                        className="order-card w-100 pointer border border-primary my-3 rounded-3 p-3" 
                        key={index}
                        >
                            <div className="upper d-flex align-items-center justify-content-between w-100">
                                <div className="d-flex">
                                    <img src={item.image1}
                                        width={60} height={60} alt="" />
                                    <p className='ms-3 mb-0'><strong>{item.name}</strong> <br />
                                    {item.quantity} x
                                    </p>
                                </div>
                                <div className="bg-primary text-white px-3 py-1 rounded-3 d-flex justify-content end">
                                    $ {item.price * item.quantity}.00
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</main>
)
}

export default OrderDetails