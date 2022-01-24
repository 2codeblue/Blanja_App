import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./profile.module.css";

const address = () => {
  return (
    <main
      className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}
    >
      <Navbar />
      <div className="d-flex w-100 flex-fill">
        <Sidebar />
        <div className={`${styles.profilebox} mt-5 ms-5 p-3 bg-white`}>
          <h5>Choose another address</h5>
          <p>Manage your shipping address</p>
          <hr />
          <div className={`${styles.addres} ms-2`}>
            <h5 className="text-secondary">Add New Addres</h5>
          </div>
          <div className={`${styles.detailAddres} mt-3 ms-2 p-2`}>
            <h5>Jane</h5>
            <p>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
            </p>
            <h5 className="text-primary">Change address</h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default address;
