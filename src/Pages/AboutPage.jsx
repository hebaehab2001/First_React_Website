import React from "react";

export default function AboutPage() {
  return (
    <>
      <main className="bg-sec-color vh-100">
        <div className="container ">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-10 text-white text-center">
              <div className="row justify-content-center">
              <h2 className="fw-bold text-uppercase">about component</h2>
              <div className="col-3 starDesign py-2">
                <div className="starline-white">
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
