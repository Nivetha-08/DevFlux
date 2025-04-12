import React from "react";
import internships from "../../../public/assets/internships.avif";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Banner.css"

const Banner = () => {
  // console.log("Internships Banner render");

  return (
    <>
      <section id="Internships">
        <div className="p-5">
          <div className="text-center">
            <h1 className="" style={{color:"#6F42C1"}}>Carrers at DevFlux</h1>
            <h5 className="p-3">INTERNSHIPS</h5>
          </div>
          <p className="text-center sub-content content">
            We are looking for young and talented IT professionals like you -
            join us, grow with us and become a part of our success story
          </p>
        </div>
        <div>
          <img
            src={internships}
            alt="Banner Image"
            className="img-fluid d-flex mx-auto px-2"
          />
        </div>
        <div className="p-5">
          <h1 className="text-center pb-3" style={{color:"#6F42C1"}}>
            Become Our Next Rising Star
          </h1>
          <p className="w-75% text-center pt-2 sub-content content">
            If you are ambitious, intellectually curious and able to learn
            quickly, we are willing to support you in efforts to develop your
            potential, we are looking for an individual who is:
          </p>
        </div>
        <div className="row px-md-5 px-2 ">
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>PASSIONATE ABOUT SOFTWARE DESIGN AND DEVELOPMENT</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>PROACTIVE, FAST-LEARNING AND MOTIVATED</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>GOOD IN PROBLEM SOLVING</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>DEPENDABLE PERSON THAT WORKS WELL WITHIN A TEAM</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>INTERESTED IN RESEARCHING NEW TECHNOLOGIES AND LANGUAGES</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>FLUENT IN ENGLISH</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>HAS A BASIC KNOWLEDGE OF OOP CONCEPTS AND DESIGN PATTERNS</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>HAS A BASIC KNOWLEDGE OF ONE OF THE FOLLOWING: C#.N JAVA OR HTML/CSS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
