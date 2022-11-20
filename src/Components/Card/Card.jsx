import React from "react";

export default function Card() {
  return (
    <div className="card mt-4 ms-5">
      <div className="card-body">
        <img src="https://via.placeholder.com/200x250" alt="placeholder" />
        <div className="d-flex mt-4">
          <img
            src="https://via.placeholder.com/50"
            alt=" placeholder"
            className="img-responsive"
            style={{ borderRadius: "360px" }}
          />
          <div className="ms-3">
            Title : Song
            <br />
            Artist : Artist Name
          </div>
        </div>
      </div>
    </div>
  );
}
