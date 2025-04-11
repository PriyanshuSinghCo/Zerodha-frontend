import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top tex ">
        <div className="col-8 p-4">
          <a style={{ textDecoration: "none" }} href="">
            {" "}
            <h3 className="fs-5  text-center">Brokerage calculater</h3>
          </a>
          <ul style={{ textAlign : "left", lineHeight: "1.8"}} className
          ="text-muted">
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a style={{ textDecoration: "none" }} href="">
            <h3 className="fs-5  text-center">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
