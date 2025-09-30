import React, { useState } from "react";

const Contact = () => {

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-top">
        <div className="container text-center">
        <h1 className="title">Get in Touch</h1>
        <p className="lead text-battleship-gray mx-auto" style={{ maxWidth: "40rem" }}>
          Have a question or want to collaborate? Feel free to reach out to me using the contact information below.
        </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-bottom">
        <div className="row g-4 py-4">
        <div className="col-md-8">
            <div className="bg-white shadow-sm p-4 rounded border h-100">
            <h2 className="h4 fw-bold text-feldgrau mb-4">Contact Information</h2>

            <div className="d-flex mb-4">
                <div className="icon-circle me-3">📧</div>
                <div>
                <h5 className="fw-semibold text-feldgrau mb-1">Email</h5>
                <a
                    href="mailto:jacfrist@gmail.com"
                    className="text-decoration-none text-battleship-gray"
                >
                    jacfrist@gmail.com
                </a>
                </div>
            </div>

            <div className="d-flex">
                <div className="icon-circle me-3">📍</div>
                <div>
                <h5 className="fw-semibold text-feldgrau mb-1">Location</h5>
                <p className="text-battleship-gray mb-0">
                    Department of Computer Science
                    <br />
                    Vanderbilt University
                    <br />
                    Nashville, TN 37235
                </p>
                </div>
            </div>
            </div>
        </div>

        <div className="col-md-4 d-flex align-items-center ">
            <div className="bg-white shadow-sm p-4 rounded border h-100 w-100 text-center">
            <h5 className="fw-semibold text-feldgrau mb-3">Connect with me</h5>
            <a
                href="https://github.com/jacfrist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary me-2 mb-2"
            >
                GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/jacqueline-frist/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary mb-2"
            >
                LinkedIn
            </a>
            </div>
        </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-silver py-5 text-center">
        <div className="container">
          <h2 className="h4 fw-bold text-feldgrau mb-4">Available Hours</h2>
          <p className="text-battleship-gray mx-auto" style={{ maxWidth: "700px" }}>
            I'm available for meetings and discussions during the following hours:
          </p>
          <div className="row justify-content-center mt-4 g-3">
            <div className="col-sm-4">
              <div className="bg-white shadow-sm p-3 rounded">
                <h5 className="fw-semibold text-feldgrau">Monday</h5>
                <p className="text-battleship-gray mb-0">11:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-white shadow-sm p-3 rounded">
                <h5 className="fw-semibold text-feldgrau">Wednesday</h5>
                <p className="text-battleship-gray mb-0">11:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-white shadow-sm p-3 rounded">
                <h5 className="fw-semibold text-feldgrau">Friday</h5>
                <p className="text-battleship-gray mb-0">11:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
