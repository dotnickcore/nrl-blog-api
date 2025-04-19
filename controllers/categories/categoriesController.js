const Category = require("../../model/Category/Category");
const { appError, AppError } = require('../../utils/appError');

const createCategories = async(req, res) => {
    try {
        const { title } = req.body;

        const category = await Category.create({
            title,
            user: req.userAuth
        });

        res.json({
            status: 'success',
            data: category
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getCategories = async(req, res) => {
    try {
        const categories = await Category.find();

        res.json({
            status: 'success',
            data: categories
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getCategory = async(req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);

        res.json({
            status: 'success',
            data: category
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const deleteCategory = async(req, res, next) => {
    try {
        const categoryToDelete = await Category.findById(req.params.id);

        if (!categoryToDelete) {
            return next(appError("Category Not Found"));
        }

        await categoryToDelete.deleteOne();

        res.json({
            status: 'success',
            data: 'category deleted'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const updateCategory = async(req, res) => {
    try {
        const { title } = req.body;

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                title
            },
            {
                new: true,
                runValidators: true
            }
        ); 

        res.json({
            status: 'success',
            data: category
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

module.exports = {
    createCategories,
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory
}