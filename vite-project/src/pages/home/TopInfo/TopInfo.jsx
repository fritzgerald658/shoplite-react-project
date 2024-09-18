import React from "react";
import "./TopInfo.css";
function TopInfo() {
  return (
    <div className="container-fluid row top-info-container border-bottom">
      <div className="col-12 col-lg-4 d-flex justify-content-center">
        <h6>Need help? Call us 112233344455</h6>
      </div>
      <div className="col-12 col-lg-4 d-flex justify-content-center">
        <h6>Summer sale discount off 60% off! Shop Now</h6>
      </div>
      <div className="col-12 col-lg-4 d-flex justify-content-center">
        <h6>2-3 business days delivery & free returns</h6>
      </div>
    </div>
  );
}
export default TopInfo;
