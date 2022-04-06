import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import styles from "./profile.module.css";
import ProfImg from "../../assets/img/prodPic.svg";
import Sidebar from "../../components/Sidebar";
import { userContext } from "../../Context/UserContext";

const Profile = () => {
  const [form, setForm] = useState({ name: "", email: "", phone_number: "", DOB: "" });
  const [gender, setGender] = useState("");
  const { user, setUser } = useContext(userContext);
  const userId = JSON.parse(localStorage.getItem("userId"));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleCustomerPU = () =>{
  //     axios.put(`${process.env.REACT_APP_URL_BACKEND}/users/customer/${userFromLS}`,{
  //         name: form.name,
  //         email: form.email,
  //         phone_number: form.phone_number,
  //         gender: gender
  //     }).then((res)=>{
  //         setUser({...user,
  //             name: form.name,
  //             email: form.email,
  //             phone_number: form.phone_number,
  //             gender: gender})
  //     })
  // }

  const handleCustomerPU = () => {
    axios({
      baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
      data: {
        name: form.name,
        email: form.email,
        phone_number: form.phone_number,
        gender: gender,
        DOB : form.DOB,
        profile_picture : null
      },
      method: `PUT`,
      url: `/users/customer/${userId}`,
    })
    .then((res) => {
        setUser({
          name: form.name,
          email: form.email,
          phone_number: form.phone_number,
          gender: gender,
          DOB : '2020-01-01',
          profile_picture : null
        })
    })
    .catch((err) => {
        console.log(err)
    })
  };

  const handleGender = (e) => {
    setGender(e.target.value)
  };

  console.log(user);
  return (
    <main
      className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}
    >
      <Navbar />
      <div className="d-flex w-100 flex-fill">
        <Sidebar />
        <div className={`w-75 bg-light profileBox pt-3`}>
          <div className={`${styles.profilebox} mt-5 ms-5 p-3 bg-white`}>
            <div className={`profilebox-wrapper h-100`}>
              <h6 className="fw-bold">
                My Profile
                <br />
                <span className="text-secondary fw-light py-3">
                  Manage your profile information
                </span>
              </h6>
              <hr className="mt-3" />
              <div className="d-flex profile-forms-wrapper">
                <div className="w-75">
                  <div className="w-100 d-flex justify-content-between px-5">
                    <label className="input-name mt-2" htmlFor="Name">
                      Name
                    </label>
                    <Input
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      className={`${styles.inputForm}`}
                      type="text"
                      id="Name"
                      placeholder={user ? user.name : `Loading User Name`}
                    />
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-3 px-5">
                    <label className="input-name mt-2" htmlFor="Name">
                      Email
                    </label>
                    <Input
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                      className={`${styles.inputForm}`}
                      type="email"
                      id="email"
                      placeholder={
                        user ? user.email : `Loading User Email account`
                      }
                    />
                  </div>

                  <div className="w-100 d-flex justify-content-between mt-3 px-5">
                    <label className="input-name mt-2" htmlFor="Name">
                      Phone number
                    </label>
                    <Input
                      name="phone_number"
                      onChange={handleChange}
                      value={form.phone_number}
                      className={`${styles.inputForm}`}
                      type="number"
                      id="phone_number"
                      placeholder={
                        user ? user.phone_number : `Loading Phone Number`
                      }
                    />
                  </div>

                  <div className="w-100 d-flex justify-content-between mt-3 px-5">
                    <label className="input-name mt-2" htmlFor="Name">
                      Gender
                    </label>
                    <div className="d-flex mt-2 ps-5">
                      <Input
                        className={`${styles.inputForm1} mt-1`}
                        onChange={handleGender}
                        name="gender"
                        type="radio"
                        value="male"
                      />{" "}
                      Male
                    </div>
                    <div className="d-flex mt-2">
                      <Input
                        className={`${styles.inputForm1} mt-1`}
                        onChange={handleGender}
                        name="gender"
                        type="radio"
                        value="female"
                      />{" "}
                      Female
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-3 px-5">
                    <label className="input-name mt-2" htmlFor="Name">
                      Date of birth
                    </label>
                    <Input
                      name="DOB"
                      onChange={handleChange}
                      className={`${styles.inputForm}`}
                      type="date"
                      id="DOB"
                      placeholder={user ? user.DOB : `Loading`}
                      value={form.DOB}
                      // disabled
                    />
                  </div>
                  <Button
                    className={`${styles.lowerButtons} ${styles.redButton} bg-primary ms-5 mt-3`}
                    onClick={handleCustomerPU}
                  >
                    Save
                  </Button>
                </div>
                <div className="w-25 profpic-setting">
                  <div
                    className={`${styles.wrapper} w-100 d-flex flex-column justify-content-center`}
                  >
                    <img src={ProfImg} className={`${styles.profImg}`} alt="" />
                    <Button
                      className={`${styles.lowerButtons1} ${styles.redButton1} bg-transparent mt-3`}
                    >
                      Select Image
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
