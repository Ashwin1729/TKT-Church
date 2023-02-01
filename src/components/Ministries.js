import React from "react";
import Footer from "./Footer";
import styles from "./Ministries.module.css";
import NavBar from "./NavBar";

const Ministries = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.frameParent}>
        <NavBar />
        <div className={styles.frameParent1}>
          <div className={styles.samuelPattaMinistriesParent}>
            <div className={styles.samuelPattaMinistries}>
              Samuel Patta Ministries
            </div>
            <div className={styles.becomeMemberWrapper}>
              <div className={styles.becomeMember}>Become Member</div>
            </div>
          </div>
          <img className={styles.image51Icon} alt="" src="../Samuel.png" />
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent8}>
            <div className={styles.frameWrapper3}>
              <div className={styles.communityParent}>
                <div className={styles.exploreMinistries}>
                  Explore Ministries
                </div>
                <div className={styles.weHaveA}>
                  We have a variety of different communities for you, have a
                  look!
                </div>
              </div>
            </div>

            <div className={styles.frameParent9}>
              <div className={styles.pdf1Parent}>
                <img className={styles.pdf1Icon} alt="" src="../pdf1.png" />
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>
                      Connect with a life group
                    </div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Life groups are the life of our church. They are the
                        extension of this church. As our Senior Pastor says, “We
                        are not a church with cells but we are a cell-based
                        church”.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
              </div>
              <div className={styles.pdf1Parent}>
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>
                      Dominion International Bible College
                    </div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Bible college is a great way to learn more about the
                        word of God and its teachings.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
                <img className={styles.pdf1Icon} alt="" src="../pdf2.png" />
              </div>
              <div className={styles.pdf1Parent}>
                <img className={styles.pdf1Icon} alt="" src="../pdf3.png" />
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>Girl Tribe</div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        A community of Brave, Strong, and Fierce Women that are
                        committed to living a fearless and passionate life.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
              </div>
              <div className={styles.pdf1Parent}>
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>E-Family</div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Learn about our Holy Bible with a community of
                        enlightened souls.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
                <img className={styles.pdf1Icon} alt="" src="../pdf4.png" />
              </div>
              <div className={styles.pdf1Parent}>
                <img className={styles.pdf1Icon} alt="" src="../pdf5.png" />
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>Teen x Youth</div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Learn about our Holy Bible with a community of
                        enlightened souls.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
              </div>
              <div className={styles.pdf1Parent}>
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>King's Kids</div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Learn about our Holy Bible with a community of
                        enlightened souls.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
                <img className={styles.pdf1Icon} alt="" src="../pdf6.png" />
              </div>
              <div className={styles.pdf1Parent}>
                <img className={styles.pdf1Icon} alt="" src="../pdf7.png" />
                <div className={styles.frameParent10}>
                  <div className={styles.communityParent}>
                    <div className={styles.connectWithA}>
                      Limitless Love Foundation
                    </div>
                    <div className={styles.lifeGroupsAreContainer}>
                      <p className={styles.clockTowerSecond}>
                        Learn about our Holy Bible with a community of
                        enlightened souls.
                      </p>
                    </div>
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <div className={styles.becomeMember}>Read More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Ministries;
