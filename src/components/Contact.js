import React, { Component } from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: "bold", fontSize: "large" }}>Contact Us</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span
          style={{
            width: "fit-content",
            padding: "15px",
          }}
        >
          <div>
            <h6 style={{ textAlign: "center" }}>Contact</h6>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "small",
              }}
            >
              <span>What's App Number : +91-9160857758</span>
              <br />
              <span>Contact Number : +91-9160857758</span>
            </p>
          </div>
        </span>
        <span
          style={{
            width: "fit-content",
            padding: "15px",
          }}
        >
          <div>
            <h6 style={{ textAlign: "center", paddingTop: "10px" }}>
              Shop Timings
            </h6>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "small",
              }}
            >
              <span>Mon - Sat: 9am - 10pm</span>
              <br></br>
              <span>Sun: 10am - 2pm</span>
            </p>
          </div>
        </span>
        <span
          style={{
            width: "fit-content",
            padding: "15px",
          }}
        >
          <div>
            <h6 style={{ textAlign: "center" }}>Address</h6>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "small",
              }}
            >
              <span>KMart</span>
              <br></br>
              <span>Near ITI Junction</span>
              <br></br>
              <span>Kancharapalem</span>
              <br></br>
              <span>Visakhapatnam</span>
            </p>
          </div>
        </span>
      </div>
      <div
        style={{
          width: "100%",
          width: "fit-content",
          paddingTop: "15px",
          margin: "auto",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.101522295545!2d83.2684485578278!3d17.735069551707472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943a745b3d1f9%3A0x6b406175cb266f80!2sBIG%20MART!5e0!3m2!1sen!2sin!4v1599614449963!5m2!1sen!2sin"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: "1px solid black" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Contact;
