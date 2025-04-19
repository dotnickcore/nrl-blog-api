const express = require('express');
const { 
    createCategories, 
    getCategories, 
    getCategory, 
    deleteCategory, 
    updateCategory 
} = require('../../controllers/categories/categoriesController');
const isLogin = require('../../middlewares/isLogin')

const categoryRouter = express.Router();

// POST/api/v1/categories
categoryRouter.post('/', isLogin, createCategories);

// GET/api/v1/categories
categoryRouter.get('/', isLogin, getCategories);

// GET/api/v1/categories/:id
categoryRouter.get('/:id', isLogin, getCategory);

// DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', isLogin, deleteCategory);

// PUT/api/v1/categories/:id
categoryRouter.put('/:id', isLogin, updateCategory);

module.exports = categoryRouter;