import React from "react";
import "./TopInfo.css";
function TopInfo() {
  return (
    <div className="row container top-info-container justify-content-center align-content-center">
      <div className="col-12 col-lg-4 justify-content-center">
        <span>Need help? Call us 112233344455</span>
      </div>
      <div className="col-12 col-lg-4 justify-content-center">
        <span>Summer sale discount off 60% off! Shop Now</span>
      </div>
      <div className="col-12 col-lg-4 justify-content-center">
        <span>2-3 business days delivery & free returns</span>
      </div>
    </div>
  );
}
export default TopInfo;
