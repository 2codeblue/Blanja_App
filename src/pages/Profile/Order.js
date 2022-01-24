import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import styles from "./profile.module.css";

const Order = () => {
  return (
      <main className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}>
          <Navbar/>
          <div className="d-flex w-100 flex-fill">
              <Sidebar/>
              <div className={`${styles.profilebox} mt-5 ms-5 p-3 bg-white`}>
                  <h5>My Order</h5>
                  <div className="">
                      <ul className='nav nav-tabs'>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>All Items</Link></li>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Not yet paid</Link></li>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Packed</Link></li>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Sent</Link></li>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Completed</Link></li>
                          <li className='nav-item'> <Link to="#" className={`${styles.tabs} nav-link`}>Order cancel</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </main>
  );
};

export default Order;
