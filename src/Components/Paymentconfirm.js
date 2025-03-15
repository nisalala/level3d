import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import { color } from "framer-motion";




const Checkout = () => {

   
  
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    // Wait for 3 seconds, then navigate back
    const timer = setTimeout(() => {
      navigate("/products"); // Change this to the desired page
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [navigate]);

  //options esewa or cod
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    const paymentData = {
      amount: "4721.83",
      productName: "GTA, JDM",
      transactionId: `txn-${Date.now()}`,
    };
    handleNextStep();
    navigate("/esewa", { state: paymentData });
  };


  const [step, setStep] = useState(3);


  useEffect(() => {
    // Check if the user is redirected from the success-payment page
    if (location.pathname === "/payment-success") {
      setStep(3);  // Set step to 3 if coming from payment-success
    }
  }, [location]);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const stepImages = [
    "./Assets/tracker.png", // Image for Shipping step
    "./Assets/tracker2.png", // Image for Payment step
    "./Assets/tracker3.png", // Image for Confirmation step
  ];


  return (
    <div className="checkout-container">
      {/* Progress Tracker */}
      <div className="progress-tracker">
        <div className="progresstxt">
          {["Shipping", "Payment", "Confirmation"].map((label, index) => (
            <div
              key={index}
              className={`step ${
                step > index + 1
                  ? "completed"
                  : step === index + 1
                  ? "active"
                  : ""
              }`}
            >
              <span>{step > index + 1 ? "01" : `0${index + 1}`}</span> {label}
            </div>
          ))}
        </div>
        <div className="progress-tracker-sign">
          <img
            src={stepImages[step - 1]}
            alt="Progress Tracker"
            className="tracker-image"
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="checkout-content">
        {step === 1 && (
          <div className="step-content">
            <div className="left-column">
              <div className="shipping-address">
                <h2>Shipping Address </h2>
              
                <div className="ship-info">
                  <img
                    src="/Assets/Avatar1.png"
                    alt="Avatar"
                    className="s-avatar"
                  />
                  
                  <div>
                  <pre><p>Saina Maharjan                    9843369030</p></pre>
                  <p>📍 Sorhakhutte, Kathmandu</p>
                </div>
                </div>
              </div>
              <div className="products">
                <h2>Products </h2>
                <div className="product-item" >
                  
                  <img src="./Assets/image7.png" alt="GTA V" />
                  <div>
                  <h3>Grand Theft Auto V</h3>
                  <p style={{color: "#c3c0c0"}}>Qty:1</p>
                  <p style={{color: "#2DC100"}}>$19.99</p>
</div>
                </div>
                <div className="product-item">
                  <img src="./Assets/image8.png" alt="JDM" />
                  <div >
                  <h3>Elden Rings</h3>
                  <p style={{color: "#c3c0c0"}}>Qty:1</p>
                  <p style={{color: "#2DC100"}}>$24</p>
</div>
                  
                </div>
                <hr />
                <div className="total-price">
                  Total Price: <strong>$33</strong>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="invoice">
                <h2>Invoice</h2>
                <hr />
                <div className="promo">
                  <h2>Promotion</h2>
                  <input type="text" placeholder="Enter Promo Code" />
                  <button>Apply</button>
                </div>
                <hr />
                <div className="order-summary">
                  <h2>Order Summary</h2>
                  <div className="arrange">
                  
                  
                  <p>Items Total:</p>
                  <p>Rs. 4,621.23</p>
                  </div>


                  <div className="arrange">
                  <p>Delivery Fee:</p>
                  <p>Rs. 100</p>
</div>
<hr />
<div className="arrange">
<h2>Total:</h2>
                  <strong>Rs. 4,721.23</strong>
                  
                  </div>
                  
                </div>
               
                <button className="proceed-btn" onClick={handleNextStep}>
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
          <div className="left-column">
            <div className="shipping-address">
              <h2>Payment Method </h2>
            <hr />
              <div className="selection-container">
      <div
        className={`selection-option ${selectedOption === "option1" ? "selected" : ""}`}
        onClick={() => handleSelect("option1")}
      >
        <div className="option-content">
        <img
                    src="/Assets/esewa.png"
                    alt="Avatar"
                    className="s-avatar"
                  />
          <h3>E-sewa Mobile Pay</h3>
        </div>
      </div>
      <div
        className={`selection-option ${selectedOption === "option2" ? "selected" : ""}`}
        onClick={() => handleSelect("option2")}
      >
        <div className="option-content">
        <img
                    src="/Assets/cod.png"
                    alt="Avatar"
                    className="s-avatar"
                  />
          <h3>Cash on Delivery</h3>
  
        </div>
      </div>
    </div>
            </div>
            <div className="products">
              <h2>Products </h2>
              <div className="product-item" >
                
                <img src="./Assets/image7.png" alt="GTA V" />
                <div>
                <h3>Grand Theft Auto V</h3>
                <p style={{color: "#c3c0c0"}}>Qty:1</p>
                <p style={{color: "#2DC100"}}>$19.99</p>
</div>
              </div>
              <div className="product-item">
                <img src="./Assets/image8.png" alt="JDM" />
                <div >
                <h3>JDM: Japanese Drift Master</h3>
                <p style={{color: "#c3c0c0"}}>Qty:1</p>
                <p style={{color: "#2DC100"}}>$24</p>
</div>
                
              </div>
              <hr />
              <div className="total-price">
                Total Price: <strong>$33</strong>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="invoice">
              <h2>Invoice</h2>
              <hr />
              <div className="promo">
                <h2>Promotion</h2>
                <input type="text" placeholder="Enter Promo Code" />
                <button>Apply</button>
              </div>
              <hr />
              <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="arrange">
                
                
                <p>Items Total:</p>
                <p>Rs. 4,621.23</p>
                </div>


                <div className="arrange">
                <p>Delivery Fee:</p>
                <p>Rs. 100</p>
</div>
<hr />
<div className="arrange">
<h2>Total:</h2>
                <strong>Rs. 4,721.23</strong>
                
                </div>
                
              </div>
             
              <button className="proceed-btn" onClick={handlePayment}>
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
        )}

        {step === 3 && (
          <div className="step3-content">
            <h2>Order Placed</h2>
            <p>Thank you for your purchase!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
