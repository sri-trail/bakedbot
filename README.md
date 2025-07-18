AI-Powered Product Recommendation System with RAG
Overview
This project is a prototype AI-powered product recommendation system that uses Retrieval-Augmented Generation (RAG) techniques to provide personalized and context-aware product recommendations. It is built as a full-stack application with a Node.js backend and React frontend.

Users input their goal (e.g., relaxation, sleep), and the system recommends relevant products enhanced with detailed ingredient information, enabling a richer user experience.

Features
Backend API with endpoints to:

Retrieve product recommendations based on user goals

Enhance product descriptions with ingredient details (RAG)

Basic Recommendation Algorithm filtering products by matching effects/goals

Retrieval-Augmented Generation (RAG) augmentation combining product and ingredient info

React Frontend to accept user input and display recommended products with augmented descriptions

Simple error handling and input validation

Tech Stack
Backend: Node.js, Express

Frontend: React.js (created with Create React App)

Data: Mock JSON datasets for products, ingredients, and sales

How to Run
Prerequisites
Node.js (v14 or above recommended)

npm or yarn

Backend Setup
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Start the backend server:

bash
Copy
Edit
node server.js
The backend runs on http://localhost:3001 by default.

Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend server:

bash
Copy
Edit
npm start
The frontend runs on http://localhost:3000 by default and connects to the backend.

API Endpoints
GET /recommendations?goal=your_goal

Returns products that match the given goal with augmented ingredient information.

Example:

bash
Copy
Edit
GET http://localhost:3001/recommendations?goal=relaxation
GET /products

Returns all product data (optional).

Assumptions & Simplifications
The recommendation algorithm is basic: products are filtered by matching effect/goal.

The RAG augmentation only combines product description with ingredient properties.

No authentication or user profiles are implemented.

Sales data is present but not actively used for recommendation ranking.

Dataset is small and mocked as JSON files instead of a database.

Frontend focuses on functionality over styling and advanced UX.

Approach & Design Decisions
Recommendation Algorithm: Simple filter by product effects aligned with user input.

RAG Implementation: Retrieval of ingredient info and concatenation into an augmented description provides richer context.

Frontend: Minimal UI to allow quick testing of goals and display results clearly.

Backend: Express with CORS enabled to serve API endpoints consumed by React frontend.

Potential Improvements
Integrate real AI/ML recommendation models using user interaction history.

Use sales and user rating data to rank and personalize recommendations.

Expand RAG system to query a vector store or knowledge base dynamically.

Add more user inputs (e.g., diet preferences, allergies) for better personalization.

Improve frontend UX with filters, multi-select goals, and loading states.

Use a real database (e.g., PostgreSQL, MongoDB) instead of JSON files.

Add authentication and user profile management.

Project Structure
kotlin
Copy
Edit
backend/
  ├── data/
  │    ├── products.json
  │    ├── ingredients.json
  │    └── sales.json
  ├── routes/
  │    ├── recommendations.js
  │    └── products.js
  ├── server.js
  └── package.json

frontend/
  ├── src/
  │    ├── App.js
  │    └── ...
  ├── public/
  ├── package.json
  └── ...
Contact
For any questions or clarifications, feel free to reach out.
# bakedbot
