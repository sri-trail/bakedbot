BakedBot – AI-Enhanced Product Recommendation Prototype
Overview

BakedBot is a full-stack web application that demonstrates applied AI integration using a lightweight retrieval-augmented recommendation pipeline. The system generates goal-based product recommendations enriched with contextual ingredient information to improve user relevance and clarity.

Users provide a goal (e.g., relaxation, sleep), and the system retrieves relevant products, augments descriptions with ingredient benefits, and returns structured recommendations via a REST API.

Architecture

Frontend (React) → REST API (Node.js / Express) → Retrieval Logic → Context Augmentation → Response

Key Features

Goal-based product recommendation filtering

Context augmentation using ingredient metadata

Lightweight retrieval-augmented response pipeline

Clean REST API architecture

Modular route structure

Error handling and input validation

Cloud-deployable full-stack structure

Technical Stack

Backend:

Node.js

Express.js

RESTful API design

CORS configuration

Frontend:

React.js

Axios for API communication

Data Layer:

Structured JSON datasets (products, ingredients, sales)

Deployment:

Render (frontend + backend ready)

API Endpoints

GET /recommendations?goal=<goal>
Returns recommended products with augmented ingredient context.

GET /products
Returns all product data.

Engineering Design Decisions

Modular route separation for scalability

Lightweight retrieval logic prioritizing explainability

Context augmentation to simulate RAG-inspired architecture

Separation of frontend and backend for clean deployment

Future Improvements

Replace keyword filtering with embedding-based semantic retrieval

Integrate vector database (e.g., Pinecone, FAISS)

Personalization using user interaction data

Ranking system using sales and engagement metrics

Add authentication and user profiles
