require("dotenv").config();
const jwt = require("jsonwebtoken");

function authorize(allowedRoles) {
  return (req, res, next) => {
    const au = req.rawHeaders.indexOf("Authorization");
    const token = req.rawHeaders[au+1];
    console.log(req.rawHeaders);
    console.log(token);
   
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access is forbidden. You must authenticate first" });
    }

    try {
      const secretKey = process.env.secretKey;
      const decodedToken = jwt.verify(token, secretKey);
      const rule_id = decodedToken.rule_id;
      console.log(rule_id);

      if (allowedRoles.includes(rule_id)) {
        req.user=decodedToken
        
        next();
      } else {
        res.status(403).json({
          message: "Access is prohibited. You do not have permission.",
        });
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ message: "Access is forbidden. Invalid token." });
    }
  };
}

module.exports = {
  authorize,
};