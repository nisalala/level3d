import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EsewaPayment = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      fetch("http://localhost:3005/api/esewa/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location.state),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.esewaData) {
            const form = document.createElement("form");
            form.method = "POST";
            form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

            Object.entries(data.esewaData).forEach(([key, value]) => {
              const input = document.createElement("input");
              input.type = "hidden";
              input.name = key;
              input.value = value;
              form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [location.state]);

  return (
    <div className="checkout-container" style={{textAlign: "center" , backgroundColor: "#171C2C", height: "100vh", width: "100%"}}>
      <h1 style={{ marginTop: "20rem"}}>Processing eSewa Payment...</h1>
      <p>If you are not redirected, please try again.</p>
    </div>
  );
};

export default EsewaPayment;
