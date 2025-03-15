import React, { useState } from "react";
import "./Popup.css"; // Assuming the CSS file is in the same folder

const PaymentCompletePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentComplete = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="payment-container">
      <button onClick={handlePaymentComplete} className="payment-btn">
        Complete Payment
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Payment Complete!</h2>
            <p>Your payment was successful.</p>
            <button onClick={closePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCompletePopup;
