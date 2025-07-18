const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

/**
 * GET /recommendations?goal=<goal>
 * Returns recommended products enhanced with RAG-augmented descriptions
 */
router.get('/', (req, res) => {
  const goal = req.query.goal;
  if (!goal) {
    return res.status(400).json({ error: 'Missing required query param: goal' });
  }

  // Filter by category matching goal (case-insensitive)
  const matched = products.filter(p => p.category.toLowerCase() === goal.toLowerCase());

  const recommendations = matched.map(p => {
    // Ingredients info stored in an object: {ingredientName: description}
    // Build augmented description by joining all ingredient descriptions
    const ingredientsDetails = Object.entries(p.ingredients).map(
      ([name, desc]) => `${name}: ${desc}`
    ).join(' | ');

    const augmentedDescription = `${p.description} Ingredients details -> ${ingredientsDetails}.`;

    return {
      id: p.id,
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description,
      augmented_description: augmentedDescription
    };
  });

  res.json({
    goal,
    count: recommendations.length,
    recommendations
  });
});

module.exports = router;
