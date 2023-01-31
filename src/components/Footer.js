import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.frameParent9}>
      <div className={styles.frameParent10}>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.exploreUsParent}>
            <div className={styles.community}>Community</div>
            <div className={styles.community}>About Us</div>
            <div className={styles.community}>Privacy Policy</div>
            <div className={styles.community}>{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className={styles.followUsParent}>
          <div className={styles.quickLinks}>{`Follow us `}</div>
          <div className={styles.exploreUsParent}>
            <div className={styles.image49Parent}>
              <div className={styles.image43TracedWrapper}>
                <img
                  className={styles.image43Traced}
                  alt=""
                  src="../image-43-traced.svg"
                />
              </div>
              <div className={styles.community}>Instagram</div>
            </div>
            <div className={styles.image49Parent}>
              <div className={styles.image44TracedWrapper}>
                <img
                  className={styles.image44Traced}
                  alt=""
                  src="../image-44-traced.svg"
                />
              </div>
              <div className={styles.community}>Facebook</div>
            </div>
            <div className={styles.image49Parent}>
              <div className={styles.image44TracedWrapper}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              </div>
              <div className={styles.community}>Youtube</div>
            </div>
            <div className={styles.image49Parent}>
              <div className={styles.image44TracedWrapper}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
              </div>
              <div className={styles.community}>Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.image49Parent}>
          <img className={styles.image49Icon} alt="" src="../image-49@2x.png" />
          <div className={styles.community}>Whatsapp Us</div>
        </div>
      </div>
      <img className={styles.image24Icon} alt="" src="../image-24@2x.png" />
      <div className={styles.clockTowerSecondBazaarMaruParent}>
        <div className={styles.clockTowerSecondContainer}>
          <p className={styles.loremIpsumDolor}>Clock Tower Second Bazaar</p>
          <p className={styles.loremIpsumDolor}>
            Maruthi Veedhi, Shivaji Nagar
          </p>
          <p className={styles.turpisEgetAenean}>Hyderabad, Telangana 500003</p>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.navigationMapPinGroup}>
            <img
              className={styles.navigationMapPin1}
              alt=""
              src="../navigation--map-pin1.svg"
            />
            <div className={styles.viewOnMaps}>View on Maps</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent16}>
        <div className={styles.cWrapper}>
          <img className={styles.cIcon} alt="" src="../c.svg" />
        </div>
        <div className={styles.community}>All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
