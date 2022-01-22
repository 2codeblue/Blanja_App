import React, {Fragment, useState} from "react";
import Button from "../../../components/Button";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Input from "../../../components/Input";


const ProfileCustomer = () => {
  return (
  <main className="mb-5">
     <Navbar />
     <Sidebar />
      cardHeader = {
        <Fragment>
             <div className="text-black-20px fw-bold">My Profile</div>
          <div className="text-black-14px text-black-50">Manage your profile information</div>
        </Fragment>
    }
    cardBody={
        <form onSubmit={handleSubmit} className="row">
          <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                Name
              </label>
              <div className="col-sm-9">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                email
              </label>
              <div className="col-sm-9">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                Phone number
              </label>
              <div className="col-sm-9">
                <Input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={userProfile.phone_number === null ? '' : userProfile.phone_number}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="gender_laki" className="col-sm-3 col-form-label text-black-50">
                Gender
              </label>
              <div className="col-sm-9">
                <div className="form-check-inline">
                  <InputCheck
                    type="radio"
                    value="male"
                    name="gender"
                    id="gender_laki"
                    onClick={changeHandler}
                    defaultChecked={userProfile.gender === null ? '' : userProfile.gender}
                    label="Laki-Laki"
                    styleLabel="me-4"
                    styleInput="me-2"
                  />
                  <InputCheck
                    type="radio"
                    value="female"
                    name="gender"
                    id="gender_perempuan"
                    onClick={changeHandler}
                    defaultChecked={userProfile.gender === null ? '' : userProfile.gender}
                    label="Perempuan"
                    styleLabel="me-4"
                    styleInput="me-2"
                  />
                </div>
                {validator.current.message('gender', userProfile.gender, 'required|in:male,female')}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                Date of birth
              </label>
              <div className="col-sm-9">
                {userProfile.date_of_birth && (
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
                      setUserProfile((oldValue) => {
                        return { ...oldValue, date_of_birth: formatDate(date) };
                      });
                    }}
                    selectedDate={userProfile.date_of_birth}
                  />
                )}
                {validator.current.message('date_of_birth', userProfile.date_of_birth, 'required')}
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <div className="offset-3 col-9">
                <Button
                  type="submit"
                  className="btn btn-orange rounded-pill px-5"
                >
                  Save
                </Button>
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
                onChange={(e) =>
                  setUserProfile((oldValue) => {
                    return { ...oldValue, avatar: e.target.files[0] };
                  })
                }
              />
              {user.avatar && user.avatar.length > 10 && !userProfile.avatar && (
                <img
                  className=" rounded-circle"
                  src={`${process.env.REACT_APP_API_URL}/${user.avatar}`}
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
              )}
              {userProfile.avatar && !user.avatar && (
                <img
                  className=" rounded-circle"
                  src="../../../assets/img/current_profile.png"
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
              )}
              {!userProfile.avatar && !user.avatar && (
                <img
                  className=" rounded-circle"
                  src={defaultProfile}
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
              )}
              {userProfile.avatar && user.avatar && (
                <img
                  className=" rounded-circle"
                  src="../../../assets/img/1.png"
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
              )}
              
              <label htmlFor="avatar" className="btn btn-outline-orange rounded-pill mt-2">
                Select image
              </label>
            </div>
          </div>
        </form>
      }
  </main>
  )
}

export default ProfileCustomer
