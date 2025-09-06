import React from "react";
import characterImg from "../../public/assets/images/character.svg";

export default function HomePage() {
  return (
    <>
      <main className="bg-sec-color vh-100">
        <div className="container ">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-3 text-white text-center">
              <img alt="character" className="w-75" src={characterImg} />
              <h4 className="fw-bold text-uppercase mt-3">Start Framework</h4>
              <div className="starDesign w-75 py-1 m-auto">
                <div className="starline-white">
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
