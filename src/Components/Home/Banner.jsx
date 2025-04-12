import React from "react";
import "./Banner.css";

const Banner = () => {
  // console.log("Home Banner render");

  return (
    <>
      <section id="Home-Banner" className="p-5">
        <p className="heading" style={{color:"#6F42C1"}}>Mobile And Web Applications</p>
        <p className="subHeading">Design & Development</p>
        <p className="pt-3 content">
          we design, develop, and deliver scalable web apps using industry best
          practices for top performance and user experence. our device-agnostic
          solutions work seamlessly across platforms. we use flutter, react
          native, swift, kotlin, android, react, Angular and spring boot
          microServices.
        </p>
        <div className="d-flex justify-content-center pt-4">
          <button className="btn text-light" style={{ textAlign: "center", backgroundColor:"#6F42C1" }}>
            Explore our service
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
