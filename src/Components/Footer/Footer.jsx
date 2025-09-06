import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-main-color text-white text-center">
        <div className="container px-3 py-4 ">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="row  justify-content-center my-2">
                <div className="col-md-2 ">
                  <i className="fa-brands fa-facebook w-50 border border-1 p-2 rounded-5"></i>
                </div>
                <div className="col-md-2 ">
                  <i className="fa-brands fa-twitter w-50 border border-1 p-2 rounded-5"></i>
                </div>

                <div className="col-md-2">
                  <i className="fa-brands fa-linkedin-in w-50 border border-1 p-2 rounded-5"></i>
                </div>
                <div className="col-md-2">
                  <i className="fa-solid fa-globe w-50 border border-1 p-2 rounded-5"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 bg-dark-color text-white">
          <div className="container py-2">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
}
