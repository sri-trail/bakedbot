const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

/**
 * GET /products/:id
 * Returns product information by ID
 */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

module.exports = router;