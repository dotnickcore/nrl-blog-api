const createComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment created'
        });
    } catch (error) {
        res.json(error)
    }
}

const getComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment found'
        });
    } catch (error) {
        res.json(error)
    }
}

const getComments = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comments found'
        });
    } catch (error) {
        res.json(error)
    }
}

const deleteComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment deleted'
        });
    } catch (error) {
        res.json(error)
    }
}

const updateComment = async(req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'comment updated'
        });
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createComment,
    getComment,
    getComments,
    updateComment,
    deleteComment
}