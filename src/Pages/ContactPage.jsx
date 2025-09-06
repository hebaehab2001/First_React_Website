import React from "react";
import Form from "react-bootstrap/Form";

export default function ContactPage() {
  return (
    <>
      <main className="vh-100">
        <div className="container ">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-10 ">
              <div className="row justify-content-center text-center">
                <h2 className="fw-bold text-uppercase ">about component</h2>
                <div className="col-3 starDesign py-2">
                  <div className="starline-dark">
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control
                        type="text"
                        placeholder="userName"
                        className="border-0  border-bottom"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="age">
                      <Form.Control
                        type="text"
                        placeholder="userAge"
                        className="border-0  border-bottom"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="userEmail"
                        className="border-0  border-bottom"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control
                        type="pass"
                        placeholder="userPassword"
                        className="border-0  border-bottom"
                      />
                    </Form.Group>
                    <button className="mybtn py-2">
                      Send Message
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
