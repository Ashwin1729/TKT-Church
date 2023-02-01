import React from "react";
import Footer from "./Footer";
import styles from "./Connect.module.css";
import NavBar from "./NavBar";

const Connect = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.frameParent}>
        <NavBar />
        <div className={styles.image2Parent}>
          <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
          <div className={styles.frameWrapper3}>
            <div className={styles.worshipNightParent}>
              <div className={styles.worshipNight}>WORSHIP NIGHT</div>
              <div className={styles.thSept2023Wrapper}>
                <div className={styles.thSept2023}>29th Sept, 2023</div>
              </div>
            </div>
          </div>
          <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        </div>

        <div className={styles.watchMoreVideosParent}>
          <div className={styles.watchMoreVideos}>Watch more Videos</div>
          <div className={styles.hereAreMore}>Here are more of our videos!</div>
        </div>

        <div className={styles.frameParent6}>
          <div className={styles.image52Parent}>
            <img
              className={styles.image52Icon}
              alt=""
              src="../image-52@2x.png"
            />
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
          </div>
          <div className={styles.image52Parent}>
            <img
              className={styles.image52Icon}
              alt=""
              src="../image-521@2x.png"
            />
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
          </div>
          <div className={styles.image52Parent}>
            <img
              className={styles.image52Icon}
              alt=""
              src="../image-522@2x.png"
            />
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
          </div>
          <div className={styles.image52Parent}>
            <img
              className={styles.image52Icon}
              alt=""
              src="../image-523@2x.png"
            />
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
          </div>
        </div>

        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <div className={styles.image24Wrapper}>
              <img
                className={styles.image24Icon1}
                alt=""
                src="../image-241@2x.png"
              />
            </div>
            <div className={styles.image24Wrapper}>
              <img
                className={styles.image26Icon}
                alt=""
                src="../image-26@2x.png"
              />
            </div>
            <div className={styles.image24Wrapper}>
              <img
                className={styles.image25Icon}
                alt=""
                src="../image-25@2x.png"
              />
            </div>
            <div className={styles.image24Wrapper}>
              <img
                className={styles.image27Icon}
                alt=""
                src="../image-27@2x.png"
              />
            </div>
          </div>
          <div className={styles.watchUsLive}>Watch us live on</div>
          <div className={styles.thu0900pm}>Thu 09:00pm</div>
          <div className={styles.daily0400pmMonContainer}>
            <p className={styles.clockTowerSecond}>Daily 04:00pm</p>
            <p className={styles.monFri}>{`Mon & Fri 06:00pm `}</p>
          </div>
          <div className={styles.monFri1}>{`Mon - Fri 06:00pm `}</div>
          <div className={styles.thu0900am}>Thu 09:00am</div>
        </div>

        <div className={styles.frameParent9}>
          <div className={styles.frameParent10}>
            <div className={styles.communityParent}>
              <div className={styles.watchMoreVideos}>Join E-church</div>
              <div className={styles.hereAreMore}>
                If you can’t get to us physically, we’ve still got you covered.
                Join the E-Church and be a part of the church virtually.
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.joinUsWrapper}>
                <div className={styles.joinUs}>Join us</div>
              </div>
              <div className={styles.learnMoreWrapper}>
                <div className={styles.joinUs}>Learn More</div>
              </div>
            </div>
          </div>
          <img className={styles.image45Icon} alt="" src="../image-46@2x.png" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Connect;
