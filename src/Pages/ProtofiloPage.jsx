import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import img1 from "../../public/assets/images/img1.png";
import img2 from "../../public/assets/images/img2.png";
import img3 from "../../public/assets/images/img3.png";
import img4 from "../../public/assets/images/img4.png";
import img5 from "../../public/assets/images/img5.png";
import img6 from "../../public/assets/images/img6.png";

export default function ProtofiloPage() {
  const [show, setShow] = useState(false);
  const [setpath, setimgpath] = useState("");

  let imagePaths = [img1, img2, img3, img4, img5, img6];

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setimgpath(imagePaths[index]);
    setShow(true);
  };

  const ScaledImg = ({ mysrc }) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-0">
            <img src={mysrc} alt="" className="w-100" />
          </Modal.Body>
        </Modal>
      </>
    );
  };

  return (
    <>
      {show && <ScaledImg mysrc={setpath} />}
      <main className="vh-100 z-n1">
        <div className="container ">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-10 text-center">
              <div className="row justify-content-center">
                <h2 className="fw-bold text-uppercase">about component</h2>
                <div className="col-3 starDesign py-2">
                  <div className="starline-dark">
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row  g-2">
                    {imagePaths.map(function (val, inx) {
                      return (
                        <div key={inx} className="col-4">
                          <div
                            className="card  position-relative"
                            onClick={() => {
                              handleShow(inx);
                            }}
                          >
                            <img src={val} alt="..." />
                            <div className="cardHover  d-flex justify-content-center align-items-center ">
                              <i class="fa-solid fa-plus text-white fs-1"></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
