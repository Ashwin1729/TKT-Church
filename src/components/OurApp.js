import React from "react";
import Footer from "./Footer";
import styles from "./OurApp.module.css";
import MobileScroll from "./MobileScroll";
import NavBar from "./NavBar";
import WindowPeak from "./WindowPeak";

const OurApp = () => {
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
        <div className={styles.downloadApp}>
          <div className={styles.appImage}>
            <img src="../FirstFrame.svg" alt="" />
          </div>
          <div className={styles.appDescription}>
            <h2>Download the App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Download</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OurApp;
