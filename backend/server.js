// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3001;

// JSON middleware (in case we need body parsing later)
app.use(express.json());

// Mount our two routes
app.use('/products', require('./routes/products'));
app.use('/recommendations', require('./routes/recommendations'));

app.listen(port, () =>
  console.log(`🚀 Backend running at http://localhost:${port}`)
);
