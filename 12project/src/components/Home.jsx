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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            sequi quibusdam beatae architecto ea laboriosam delectus nihil quis
            quo explicabo aspernatur, dolores velit perspiciatis quaerat
            deserunt? Nihil nam sequi incidunt? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Ratione nisi dicta, magni explicabo
            excepturi quas. Ipsa quod minima omnis sequi cumque possimus
            repellendus, alias asperiores molestiae ipsum quaerat iure laborum?
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
