import React, { useState, useEffect, useContext } from "react";
import AddressModal from "../../components/AddressModal";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./profile.module.css";
import axios from "axios";

const ShippAddress = () => {

  const [displayModal, setDisplayModal] = useState(false)
  const handleModal = () => setDisplayModal(!displayModal)
  const [addressPrimary, setAddressPrimary] = useState([])
  const UID = JSON.parse(localStorage.getItem('userId'))
  console.log(UID);
  //DUMMYYYY
  //   const addressPrimary = [{
  //     id: 1,
  //     recipient_name: "Tante Lala",
  //     recipient_phone_number: "0888888889",
  //     address: "jalan merpati",
  //     postal_code: "123456",
  //     city: "Depok",
  //     address_primary: 1,
  //     customer_id: "73351edf-eefa-4d99-ad2d-9ac7067972ad",
  //     address_type: 'Rumah'
  // }, {
  //   id: 2,
  //   recipient_name: "Tante Lala",
  //   recipient_phone_number: "0888888898",
  //   address: "jalan burung dara",
  //   postal_code: "123465",
  //   city: "Jakarta Barat",
  //   address_primary: 0,
  //   customer_id: "73351edf-eefa-4d99-ad2d-9ac7067972ad",
  //   address_type: 'Kantor'
  // }, {
  //   id: 3,
  //   recipient_name: "Om Lala",
  //   recipient_phone_number: "081234567899",
  //   address: "jalan cendrawasih",
  //   postal_code: "14045",
  //   city: "Cikarang Barat",
  //   address_primary: 0,
  //   customer_id: "73351edf-eefa-4d99-ad2d-9ac7067972ad",
  //   address_type: 'Rumah'
  // }
  // ]

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/addresses/${UID}`)
      .then((res) => {
        const result = res.data.data;
        setAddressPrimary(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const handleChangePrimary = (id) => {
    axios.put(`${process.env.REACT_APP_URL_BACKEND}/addresses/primary-address`, {
      new_primary_address_id: id,
      customer_id: UID
    })
      .then((res) => {
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/addresses/${UID}`)
          .then((res) => {
            const result = res.data.data;
            setAddressPrimary(result)
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <main
      className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}
    >
      <Navbar />
      <div className="d-flex w-100 flex-fill">
        <Sidebar />
        <div className={`w-75 bg-light profileBox pt-3`}>
          <div className={`${styles.profilebox} my-5 ms-5 p-3 bg-white`}>
            <h5>Choose another address</h5>
            <p>Manage your shipping address</p>
            <hr />
            <div className={`${styles.addres} w-100 px-5 pointer`}
              onClick={handleModal}>
              <h5 className="text-secondary">Add New Addres</h5>
            </div>
            {addressPrimary.map((item, index) => {
              return (
                item.address_primary === 1 ? (
                  <div className={`${styles.detailAddres} w-100 mt-3 p-3`}
                    key={index}>
                    <h5>{item.recipient_name}</h5>
                    <h6>{item.address_type}</h6>
                    <p>
                      {item.address}, {item.city}, {item.postal_code}
                    </p>
                  </div>
                ) :
                  (
                    <div className={`${styles.detailAddress} w-100 mt-3 p-3`}
                      key={index}>
                      <h5>{item.recipient_name}</h5>
                      <h6>{item.address_type}</h6>
                      <p>
                        {item.address}, {item.city}, {item.postal_code}
                      </p>
                      <div
                        className={`text-primary py-3 px-2 w-25 text-center bg-primary text-white rounded-3 pointer`}
                        onClick={() => handleChangePrimary(item.id)}>Set Primary Address</div>
                    </div>
                  )
              )
            })}
          </div>
        </div>
      </div>
      {displayModal && <AddressModal handleModal={handleModal} />}
    </main>
  );
};

export default ShippAddress;
