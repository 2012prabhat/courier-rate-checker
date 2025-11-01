🚀 Courier Rate Checker (MERN + TypeScript)

A simple shipping aggregator demo that allows users to check courier rates between two pincodes.
Users can enter shipment details — pickup pincode, delivery pincode, weight, and service type — to view courier rates and estimated delivery days.
All calculations are saved in MongoDB and displayed as history.

🧩 Tech Stack
Frontend: React + TypeScript + Material UI
Backend: Node.js + Express + TypeScript
Database: MongoDB
Styling: Material UI (MUI)
Package Manager: npm 

⚙️ Features

✅ Check courier rates based on shipment details
✅ See available courier partners (Delhivery, Bluedart, DTDC, etc.)
✅ Simple rate calculation: rate = base + weight * 10 + variation
✅ View all previous rate checks in a history list
✅ Click any history item to view full rate details in a popup
✅ Fully responsive UI



🧠 How the App Works
The user enters:
Pickup pincode
Delivery pincode
Weight (kg)
Service type (Standard / Express)

Backend calculates courier rates like:

Delhivery = 100 + weight * 10 + random(0–5)
Bluedart  = 105 + weight * 10 + random(0–5)
DTDC      = 102 + weight * 10 + random(0–5)


Result is saved in MongoDB and returned to frontend.

Frontend displays the result in a table and stores the history.

⚡ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/2012prabhat/courier-rate-checker.git
cd courier-rate-checker

2️⃣ Setup and Run Backend
cd backend
npm install


Create a .env file inside backend with:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/courierDB


Then run the backend:

npm run dev


The backend should start on http://localhost:5000

3️⃣ Setup and Run Frontend
cd ../frontend
npm install
npm run dev


The frontend will start at http://localhost:3000

4️⃣ Connect the Two

In frontend/src/services/api.ts, ensure the backend URL matches:

const API_URL = "http://localhost:5000/api";

✅ API Endpoints
Method	Endpoint	Description
POST	/api/rates/check	Check courier rates
GET	/api/rates/history	Fetch rate check history
🖼️ Screenshots (Optional)

(Add these once you take screenshots)

Home Page	History Popup

	
🧩 Example MongoDB Document
{
  "pickupPincode": "110035",
  "deliveryPincode": "110094",
  "weight": 10,
  "serviceType": "Standard",
  "results": [
    { "courier": "Delhivery", "rate": 155, "eta": "3 days" },
    { "courier": "Bluedart", "rate": 160, "eta": "2 days" },
    { "courier": "DTDC", "rate": 158, "eta": "4 days" }
  ],
  "createdAt": "2025-11-01T10:40:31.252Z"
}


👨‍💻 Author
Prabhat Kumar
📧 2012prabhat@gmail.com
📱 +91 9711393310