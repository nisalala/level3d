import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // Extract the 'data' query parameter from the URL
    const queryParams = new URLSearchParams(location.search);
    const encodedData = queryParams.get("data");

    if (encodedData) {
      // Decode the data from base64
      const decodedData = atob(encodedData);

      // Parse the decoded JSON data
      const paymentInfo = JSON.parse(decodedData);
      setPaymentData(paymentInfo);

      // You can now process the payment information or display it
      console.log(paymentInfo); // Example: view payment data

      // Redirect to another page (you can adjust this based on your app)
      navigate("/payment-confirm"); // You can replace this with your desired page
    } else {
      // If no data, handle failure or invalid response
      navigate("/failure"); // Redirect to a failure page
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Processing Payment...</h1>
      <p>Redirecting...</p>
      {paymentData && (
        <div>
          <h2>Transaction Details:</h2>
          <pre>{JSON.stringify(paymentData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
