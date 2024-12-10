const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "kunciisi5bpaw");
        next();
    } catch (error) {
        res.status(401).res.json({ message: "Auth failed!" });
    }
};