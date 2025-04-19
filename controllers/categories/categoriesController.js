const createCategories = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category created'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getCategories = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'categories found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getCategory = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const deleteCategory = async(req, res) => {
    try {
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
        res.json({
            status: 'success',
            data: 'category updated'
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