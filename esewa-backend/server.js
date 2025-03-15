require("dotenv").config();
const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3005;

// eSewa Merchant Credentials (store these in a .env file)
const MERCHANT_CODE = process.env.MERCHANT_CODE || "EPAYTEST";
const SECRET_KEY = process.env.SECRET_KEY || "8gBm/:&EnhH.1/q";
const SUCCESS_URL = process.env.SUCCESS_URL || "http://localhost:3000/payment-success";
const FAILURE_URL = process.env.FAILURE_URL || "http://localhost:3000";

// Function to generate eSewa signature
const generateEsewaSignature = (amount, transactionUuid) => {
  const data = `total_amount=${amount},transaction_uuid=${transactionUuid},product_code=${MERCHANT_CODE}`;
  return crypto.createHmac("sha256", SECRET_KEY).update(data).digest("base64");
};

// Route to handle payment request
app.post("/api/esewa/pay", (req, res) => {
  const { amount, transactionId, productName } = req.body;

  if (!amount || !transactionId || !productName) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transactionUuid = `txn-${Date.now()}`;
  const signature = generateEsewaSignature(amount, transactionUuid);

  const esewaData = {
    amount,
    tax_amount: "0",
    total_amount: amount,
    transaction_uuid: transactionUuid,
    product_code: MERCHANT_CODE,
    product_service_charge: "0",
    product_delivery_charge: "0",
    success_url: SUCCESS_URL,
    failure_url: FAILURE_URL,
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature,
  };

  res.json({ esewaData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
