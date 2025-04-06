const express = require('express');
const { createCategories, getCategories, getCategory, deleteCategory, updateCategory } = require('../../controllers/categories/categoriesController');

const categoryRouter = express.Router();

// POST/api/v1/categories
categoryRouter.post('/', createCategories);

// GET/api/v1/categories
categoryRouter.get('/', getCategories);

// GET/api/v1/categories/:id
categoryRouter.get('/:id', getCategory);

// DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', deleteCategory);

// PUT/api/v1/categories/:id
categoryRouter.put('/:id', updateCategory);

module.exports = categoryRouter;