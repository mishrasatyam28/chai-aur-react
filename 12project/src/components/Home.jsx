import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* 1 */}
      <div className="home" id="home">
        <main>
          <h1>TeachyStar</h1>
          <p>Solution to all your problems </p>
        </main>
      </div>

      {/* 2 */}
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to TechyStar, your premier destination for cutting-edge
            technology solutions and unparalleled service. Formerly known as
            Techie, TechyStar embodies a new era of innovation and excellence in
            the tech service industry. At TechyStar, we bring a fresh
            perspective to technology, combining expertise with a
            customer-centric approach. Our team of dedicated professionals is
            committed to delivering top-notch solutions that empower businesses
            to thrive in the digital age. With a focus on adaptability and
            forward thinking, TechyStar is your go-to partner for navigating the
            ever-evolving technological landscape. As TechyStar, we continue to
            uphold the values that have defined our legacy, while embracing a
            renewed commitment to innovation, reliability, and client
            satisfaction. Whether you're a startup charting new territories or
            an established enterprise seeking to elevate your tech capabilities,
            TechyStar is here to guide you on your journey to success.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
