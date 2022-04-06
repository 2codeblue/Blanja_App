import React, { Fragment, useState, useEffect, useContext } from "react";
import { useNavigate, Link, useParams, Navigate } from "react-router-dom";
import { BsPencil, BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import styles from "./sidebar.module.css";
import { userContext } from "../../Context/UserContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(userContext)

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    localStorage.removeItem("customer_bags_id");
    localStorage.removeItem("userStatus");
    navigate("/");
  };

  return (
    <div className="sidebar w-25 p-5">
      <div className="infouser d-flex align-items-center">
        <div className="userphoto m-3">
          <img
            className={`${styles.imguser} rounded-circle`}
            src="https://cdn1.vectorstock.com/i/1000x1000/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg"
            alt=""
          />
        </div>
        <div className="edit">
          <div className="username fw-bold">{user ? user.name : `Loading...`}</div>
          <div className={`${styles.cpointer} editprofile text-black-50`}>
            <p className={styles.cpointer}>
              <BsPencil /> Ubah profile{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="userinfo mt-5 ms-4">
        <div
          className={`${styles.cpointer} myaccout d-flex align-items-center mt-4`}
        >
          <div className="icon p-2 bg-primary fs-4 rounded-circle">
            <BsPerson />
          </div>
          <div className="infosetting ps-3">
            <Link to="/profile" className="text-decoration-none text-dark">
              My Profile
            </Link>{" "}
          </div>
        </div>
        <div
          className={`${styles.cpointer} myadress d-flex align-items-center mt-4`}
        >
          <div className="icon p-2 bg-warning fs-4 rounded-circle">
            <GoLocation />
          </div>
          <div className="infosetting ps-3">
            <Link
              to="/Shipping-Addres"
              className="text-decoration-none text-dark"
            >
              Shipping Adrress
            </Link>
          </div>
        </div>
        <div
          className={`${styles.cpointer} myorder d-flex align-items-center mt-4`}
        >
          <div className="icon p-2 bg-info fs-4 rounded-circle">
            <BiTask />
          </div>
          <div className="infosetting p-3">
            <Link to="/My-Order" className="text-decoration-none text-dark">
              My order
            </Link>{" "}
          </div>
        </div>
        <div
          className={`${styles.cpointer} logout d-flex align-items-center mt-4`}
          onClick={handleLogout}
        >
          <div className="icon p-2 bg-danger fs-4 rounded-circle">
            <FiLogOut />
          </div>
          <div className="infosetting ps-3">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
