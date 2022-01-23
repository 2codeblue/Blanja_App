/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import Main from '../../../components/Main';
import ContentCard from '../../../components/ContentCard/ContentCard';
// import { DropdownDate } from 'react-dropdown-date';
import defaultProfile from '../../../assets/img/current_profile.png';
import Input from '../../../components/Input';
import Sidebar from '../../../components/Sidebar/SideBarCustommer'

const Profile = () => {
  // const formatDate = (date) => {
  //   var d = new Date(date),
  //     month = '' + (d.getMonth() + 1),
  //     day = '' + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = '0' + month;
  //   if (day.length < 2) day = '0' + day;

  //   return [year, month, day].join('-');
  // };
  // const [customerProfile, setCustomerProfile] = useState([]);
  // const changeHandler = (e) => {
  //   setCustomerProfile((oldValue) => {
  //     return { ...oldValue, [e.target.name]: e.target.value };
  //   });
  // };
  // useEffect(() => {
  //   setCustomerProfile((oldValue) => {
  //     return {
  //       ...oldValue,
  //       ...customer,
  //       email: '',
  //       avatar: '',
  //       date_of_birth: new Date(customer.date_of_birth).toISOString().slice(0, 10),
  //     };
  //   });
  // }, []);
  // useEffect(() => {
  // }, [customerProfile]);
  // const submitHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log(customerProfile);
  //   } catch (error) {
  //     if (error.response.data.statusCode === 422) {
  //       document.querySelector('.main-panel').scrollTo(0, 0);
  //       ({
  //         avatar: '',
  //         email: '',
  //       });
    
  //     }
  //   }
  // };
  return (
    <Main className="mb-5">
      <ContentCard
        cardHeader={
          <Fragment>
            <div className="text-black-20px fw-bold">My Profile</div>
            <div className="text-black-14px text-black-50">Manage your profile information</div>
          </Fragment>
        }
        cardBody={
          <form onSubmit='' className="row">
            <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                  Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value=''
                    onChange=''
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                  email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                 
                    id="email"
                    name="email"
                    placeholder=''
                    onChange=''
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Phone number
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value=''
                    onChange=''
                  />
                 
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="gender_laki" className="col-sm-3 col-form-label text-black-50">
                  Gender
                </label>
                <div className="col-sm-9">
                  <div className="form-check-inline">
                    <Input
                      type="radio"
                      value="male"
                      name="gender"
                      id="gender_laki"
                      onClick=''
                      defaultChecked=''
                      label="Laki-Laki"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                    <Input
                      type="radio"
                      value="female"
                      name="gender"
                      id="gender_perempuan"
                      onClick=''
                      defaultChecked=''
                      label="Perempuan"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                  </div>
                 
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Date of birth
                </label>
                <div className="col-sm-9">
                  {/* {customerProfile.date_of_birth && (
                    <DropdownDate
                      startDate={'1945-01-01'}
                      classes={{
                        dateContainer: 'd-flex justify-content-between',
                        day: 'form-select',
                        year: 'form-select',
                        month: 'form-select',
                      }}
                      defaultValues={{
                        year: 'Select year',
                        month: 'Select month',
                        day: 'Select day',
                      }}
                      onDateChange={(date) => {
                        console.log(formatDate(date));
                        setCusstomerProfile((oldValue) => {
                          return { ...oldValue, date_of_birth: formatDate(date) };
                        });
                      }}
                      selectedDate={customerProfile.date_of_birth}
                    />
                  )} */}
                 
                </div>
              </div>
              <div className="row mb-3 mt-5">
                <div className="offset-3 col-9">
                  <button
                    type="submit"
                    className="btn btn-orange rounded-pill px-5"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 order-lg-0 order-0 d-flex flex-wrap justify-content-evenly">
              <hr className="d-lg-block d-none" width="1" size="150" />
              <div className="d-flex flex-wrap flex-column align-items-center pb-3">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/jpeg, image/png"
                  onChange=''
                />
                {/* {customer.avatar && Customer.avatar.length > 10 && !customerProfile.avatar && (
                  <img
                    className=" rounded-circle"
                    src="../../../assets/img/current_profile.png"
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {customerProfile.avatar && !customer.avatar && (
                  <img
                    className=" rounded-circle"
                    src="../../../assets/img/current_profile.png"
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {!customerProfile.avatar && !customer.avatar && (
                  <img
                    className=" rounded-circle"
                    src={defaultProfile}
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {customerProfile.avatar && customer.avatar && (
                  <img
                    className=" rounded-circle"
                    src="../../../assets/img/current_profile.png"
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )} */}
               
                <label htmlFor="avatar" className="btn btn-outline-orange rounded-pill mt-2">
                  Select image
                </label>
              </div>
            </div>
          </form>
        }
      />
    </Main>
  );
};

export default Profile;
