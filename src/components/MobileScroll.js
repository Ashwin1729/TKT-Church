import React, { useState } from "react";
import styles from "./MobileScroll.module.css";
import ScreenData from "./ScreenData";

const scroll_data = [
  {
    heading: "Watch us Live",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.",
    imageUrl: "../FirstFrame.svg",
  },
  {
    heading: "Join Communitied",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.",
    imageUrl: "../SecondFrame.svg",
  },
  {
    heading: "Request Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet vel enim enim vestibulum habitasse.",
    imageUrl: "../ThirdFrame.svg",
  },
];

const MobileScroll = () => {
  const [currImage, setCurrImage] = useState(0);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollData}>
        {scroll_data.map((screen, idx) => {
          return (
            <div className={styles.scrollScreen}>
              <ScreenData
                screen={screen}
                idx={idx}
                setCurrImage={setCurrImage}
                key={idx}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.frame}>
        <div className={styles.mobileMockup}>
          <div className={styles.screen}>
            <img
              className={styles.slideinright}
              src={scroll_data[currImage].imageUrl}
              key={scroll_data[currImage].imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
