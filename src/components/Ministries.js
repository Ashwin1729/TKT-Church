import React from "react";
import Footer from "./Footer";
import styles from "./Ministries.module.css";
import MobileScroll from "./MobileScroll";
import NavBar from "./NavBar";
import WindowPeak from "./WindowPeak";

const Ministries = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.frameParent}>
        <NavBar />
        <div className={styles.upperAnm}>
          <h3>Reimagining Church Experience</h3>
          <div className={styles.product_showcase}>
            <div className={styles.showcase_wrapper}>
              <img className={styles.overlay1} src="../left.png" alt="" />
              <img className={styles.overlay2} src="../center.png" alt="" />
              <img className={styles.overlay3} src="../right.png" alt="" />
            </div>
          </div>
        </div>
        <MobileScroll />
        <WindowPeak />
        <Footer />
      </div>
    </div>
  );
};

export default Ministries;
