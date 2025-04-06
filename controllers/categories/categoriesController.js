const createCategories = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category created'
        });
    } catch (error) {
        res.json(error)
    }
}

const getCategories = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'categories found'
        });
    } catch (error) {
        res.json(error)
    }
}

const getCategory = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category found'
        });
    } catch (error) {
        res.json(error)
    }
}

const deleteCategory = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category deleted'
        });
    } catch (error) {
        res.json(error)
    }
}

const updateCategory = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'category updated'
        });
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createCategories,
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory
}