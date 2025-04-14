const User = require("../model/User/User");
const { appError } = require("../utils/appError");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isAdmin = async (req, res, next) => {
    // get token from header
    const token = getTokenFromHeader(req);

    // verify the token
    const decodedUser = verifyToken(token);

    req.userAuth = decodedUser.id;

    // save the user into req obj
    const user = await User.findById(decodedUser.id);

    if (user.isAdmin) {
        return next();
    } else {
        return next(appError("You don’t have permission to access this resource", 403))
    }
}

module.exports = isAdmin;