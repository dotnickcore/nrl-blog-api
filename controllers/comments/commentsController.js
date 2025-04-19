const createComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment created'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const getComments = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comments found'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const deleteComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment deleted'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

const updateComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment updated'
        });
    } catch (error) {
        next(new AppError(error.message));
    }
}

module.exports = {
    createComment,
    getComment,
    getComments,
    updateComment,
    deleteComment
}