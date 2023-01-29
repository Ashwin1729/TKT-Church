import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

const styleHandler = ({ isActive }) => ({
  position: "relative",
  letterSpacing: "0.41px",
  lineHeight: "16.3px",
  fontWeight: "20",
  display: "inline-block",
  width: "160px",
  flexShrink: "0",
  fontSize: "medium",
  color: "white",
  textDecoration: "none",
  opacity: isActive ? "1" : "0.3",
});

const HomePage = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.homeParent}>
            <NavLink to="/" style={styleHandler}>
              Home
            </NavLink>
            <NavLink to="/ministries" style={styleHandler}>
              Ministries
            </NavLink>
            <NavLink to="/connect" style={styleHandler}>
              Connect
            </NavLink>
            <NavLink to="/ourApp" style={styleHandler}>
              Our App
            </NavLink>
            <NavLink to="/giveOnline" style={styleHandler}>
              Give Online
            </NavLink>
          </div>
          <img className={styles.image23Icon} alt="" src="../image-23@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.exploreUsParent}>
                <div className={styles.exploreUs}>Explore Us</div>
                <div className={styles.ourTimingsAnd}>
                  Our timings and campuses.
                </div>
                <div className={styles.navigationMapPinParent}>
                  <img
                    className={styles.navigationMapPin}
                    alt=""
                    src="../navigation--map-pin.svg"
                  />
                  <div className={styles.am800pm}>
                    Hyderabad, Telangana 500003
                  </div>
                </div>
                <div className={styles.navigationMapPinParent}>
                  <img
                    className={styles.navigationMapPin}
                    alt=""
                    src="../calendar--clock.svg"
                  />
                  <div className={styles.am800pm}>9:30am - 8:00pm</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.exploreMoreWrapper}>
                  <div className={styles.exploreMore}>Explore More</div>
                </div>
              </div>
            </div>
            <img
              className={styles.image46Icon}
              alt=""
              src="../image-46@2x.png"
            />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.ourHistoryParent}>
              <div className={styles.ourHistory}>Our History</div>
              <div className={styles.image53Parent}>
                <img
                  className={styles.image53Icon}
                  alt=""
                  src="../image-53@2x.png"
                />
                <img
                  className={styles.image53Icon}
                  alt=""
                  src="../image-531@2x.png"
                />
                <img
                  className={styles.image53Icon}
                  alt=""
                  src="../image-532@2x.png"
                />
              </div>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Amet vel enim enim
                  vestibulum habitasse turpis ante. Nulla elit sagittis
                  elementum duis amet id sed ipsum ac. Sed sit faucibus mauris
                  adipiscing. Gravida nibh quam enim amet dolor sed. A eget quis
                  molestie commodo amet nisl.
                </p>
                <p className={styles.loremIpsumDolor}>&nbsp;</p>
                <p className={styles.turpisEgetAenean}>
                  Turpis eget aenean mollis congue diam facilisi suspendisse vel
                  tristique. Elit nullam ut amet in cursus imperdiet mollis odio
                  in. Ridiculus magna metus eleifend magna et ultrices quis in
                  lorem. Dictumst pellentesque nibh malesuada turpis feugiat at
                  viverra purus. Ut malesuada suspendisse elementum sed eu purus
                  amet. Venenatis consectetur nunc ullamcorper tristique egestas
                  convallis id neque neque. Ultrices aliquam nisl accumsan quis
                  cum penatibus et. Eget sollicitudin aliquam eu et tellus cras.
                  Nibh morbi tellus quam sed. Laoreet ac eu euismod porta.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.meetOurFamilyParent}>
            <div className={styles.meetOurFamily}>Meet our family</div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent2}>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image51Icon1}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent2}>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image51Icon1}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent2}>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image51Icon1}
                    alt=""
                    src="../image-50@2x.png"
                  />
                </div>
                <div className={styles.image50Wrapper}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="../image-51@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
                <div className={styles.samuelPattaParent}>
                  <div className={styles.samuelPatta}>Samuel Patta</div>
                  <div className={styles.bishop}>Bishop</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="../vector.svg"
                    />
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
              <img
                className={styles.image49Icon}
                alt=""
                src="../image-49@2x.png"
              />
              <div className={styles.community}>Whatsapp Us</div>
            </div>
          </div>
          <img className={styles.image24Icon} alt="" src="../image-24@2x.png" />
          <div className={styles.clockTowerSecondBazaarMaruParent}>
            <div className={styles.clockTowerSecondContainer}>
              <p className={styles.loremIpsumDolor}>
                Clock Tower Second Bazaar
              </p>
              <p className={styles.loremIpsumDolor}>
                Maruthi Veedhi, Shivaji Nagar
              </p>
              <p className={styles.turpisEgetAenean}>
                Hyderabad, Telangana 500003
              </p>
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
        <div className={styles.image55Parent}>
          <img className={styles.image55Icon} alt="" src="../image-55@2x.png" />
          <img
            className={styles.s5a05191Icon}
            alt=""
            src="../-s5a0519-1@2x.png"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.arrowCaretCircleLeftWrapper}>
          <img
            className={styles.arrowCaretCircleLeft}
            alt=""
            src="../arrow--caret-circle-left.svg"
          />
        </div>
        <div className={styles.arrowCaretCircleRightWrapper}>
          <img
            className={styles.arrowCaretCircleLeft}
            alt=""
            src="../arrow--caret-circle-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
