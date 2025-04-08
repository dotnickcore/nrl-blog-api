const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
    // get token from header
    const token = getTokenFromHeader(req);

    // verify the token
    const decodedUser = verifyToken(token);

    req.userAuth = decodedUser.id;

    // save the user into req obj
    if (!decodedUser) {
        return res.json({
            message: "Expired or invalid token, please try again",
        });
    } else {
        next();
    }
}

module.exports = isLogin;