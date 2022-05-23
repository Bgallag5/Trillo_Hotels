import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from '@fortawesome/free-regular-svg-icons';

export default function HotelView() {
  return (
    <main className="hotel">
      <div className="hotel__images">
        <div className="img-container">
          <img
            src={require("../images/hotel-1.jpg")}
            alt=""
            className="hotel__images--img"
          />
        </div>
        <div className="img-container">
          <img
            src={require("../images/hotel-2.jpg")}
            alt=""
            className="hotel__images--img"
          />
        </div>
        <div className="img-container">
          <img
            src={require("../images/hotel-3.jpg")}
            alt=""
            className="hotel__images--img"
          />
        </div>
      </div>
      <div className="hotel__titlebar">
        <div className="titlebar__container">
          <h2 className="titlebar--name">Grand Budapest</h2>
          <span className="titlebar--stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <div className="titlebar__container">
          <div className="titlebar--location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Lisbon, Portugal</p>
          </div>
          <div className="titlebar--rating">8.6</div>
        </div>
      </div>
      <div className="hotel__content">
        <div className="hotel__content--left">
          <div className="hotel-info">
            <div className="description">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p>
                {" "}
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
            </div>
            <div className="features">
              <ul className="features__list">
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Close to the Beach</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Free airport shuttle</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Air conditioning and heating</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>We speak all languages</p>
                </li>
              </ul>
              <ul className="features__list">
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Free Breakfast</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Free Wifi</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Pets Allowed</p>
                </li>
                <li className="features__list--item">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Family Friendly</p>
                </li>
              </ul>
            </div>
            <div className="recommends">
              <p>Lucy and 3 other friends recommend this hotel.</p>
              <div className="recommends__users">
                <img
                  src={require("../images/user-3.jpg")}
                  alt=""
                  className="recommends__users--user"
                />
                <img
                  src={require("../images/user-3.jpg")}
                  alt=""
                  className="recommends__users--user"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hotel__content--right">
          <div className="review">
            <div className="review__review">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </p>
            </div>
            <div className="review__user">
              <img
                src={require("../images/user-5.jpg")}
                alt=""
                className="review__user--img"
              />
              <div className="review__user--namedate">
                <p className="namedate--name">Nick Smith</p>
                <p className="namedate--date">Feb 23rd, 2022</p>
              </div>
              <p className="review__user--rating">7.8</p>
            </div>
          </div>
          <div className="review">
            <div className="review__review">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </p>
            </div>
            <div className="review__user">
              <img
                src={require("../images/user-4.jpg")}
                alt=""
                className="review__user--img"
              />
              <div className="review__user--namedate">
                <p className="namedate--name">Jerry Madman</p>
                <p className="namedate--date">Mar 26th, 2022</p>
              </div>
              <p className="review__user--rating">8.5</p>
            </div>
          </div>

          <button className="all-reviews">See More &rarr;</button>
        </div>
      </div>
      <div className="hotel__footer">
        <p>We Currently have 4 rooms available</p>
        <button className="footer--btn">
          <p className="footer--btn--text"> Book Now</p>
        </button>
      </div>
    </main>
  );
}
