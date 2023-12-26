const { knex } = require('../db/db');
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../middleware/auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

exports.getuser = (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
};

exports.getauthenticate = passport.authenticate("google", {
  scope: ["email", "profile"],
});


// exports.protected =
//   (isLoggedIn,
//   async (req, res) => {
//     if (req.user) {
//       try {
//         const { displayName, emails, id } = req.user;

//         const user_name = displayName;
//         const email = emails[0].value;
       
       
//         const emailCheck = await knex('Users').select('*').where({ email });
//         console.log(emailCheck.length);

//         if (emailCheck.length > 0) {
//           const payload = {
//             user_name: user_name,
//             email: email,
//             role_id: emailCheck.role_id,
//             user_id: emailCheck.user_id,
//           };

//           const secretKey = process.env.secretKey;
//           const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
//           res.status(200).json({
//             message: "User logged in successfully",
//             token: token,
//           });
//         } else {
          
         
//           const password = "No Access";
//           const query =
//             'INSERT INTO public."Users" (user_name,email,password) VALUES ($1, $2, $3)';
//           const values = [
//             user_name,
//             email,
//             password,
          
            
          
//           ];
//           await knex(query, values);
//           const payload = {
//             user_name: user_name,
//             email: email,
          
//             user_id: id,
//           };

//           const secretKey = process.env.SECRET_KEY;
//           const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
//           res.status(200).json({
//             logmessage: "User added successfully",
//             token: token,
//             displayName: displayName,
//           });
//         }
//       } catch (error) {
//         console.error("Error saving user information to PostgreSQL:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     } else {
//       res.sendStatus(401);
//     }
//   });

exports.logout = (req, res) => {
  req.logout(() => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      res.send("Goodbye!");
    });
  });
};
// exports.callback = passport.authenticate("google", {
//   successRedirect: "http://localhost:3000/",
//   failureRedirect: "/auth/google/failure",
// });


    exports.callback = (req, res, next) => {
      passport.authenticate("google", async (err, user) => {
        if (err) {
          return res.redirect("/auth/google/failure");
        }
    
        if (!user) {
          return res.redirect("/auth/google/failure");
        }
    
        req.logIn(user, async (err) => {
          if (err) {
            return res.redirect("/auth/google/failure");
          }
    
          try {
            const { displayName, emails, id } = req.user;
            const user_name = displayName;
            const email = emails[0].value;
            
    
            const emailCheck = await knex('Users').select('*').where({ email });
    console.log(emailCheck);
            if (emailCheck.length > 0) {
              const payload = {
                user_name: user_name,
                email: email,
                rule_id: emailCheck[0].rule_id, 
                user_id: emailCheck[0].user_id, 
              };
    
              const secretKey = process.env.secretKey;
              const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    
              const redirectUrl = `http://localhost:3000/?token=${token}`;
              res.redirect(redirectUrl);
            } else {
              const password = "No Access";
              const first_name=user_name

              const result = await knex('Users').insert({ first_name, email, password }).returning('*');
              
              
              
              console.log(result);
              const payload = {
                user_name: user_name,
                email: email,
                user_id: result[0].user_id,
                rule_id : result[0].rule_id
              };
    
              const secretKey = process.env.secretKey;
              const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    
              const redirectUrl = `http://localhost:3000/?token=${token}`;
              res.redirect(redirectUrl);
            }
          } catch (error) {
            console.error("Error saving user information to PostgreSQL:", error);
            res.status(500).send("Internal Server Error");
          }
        });
      })(req, res, next);
    };
    
    
    
    
exports.fail = (req, res) => {
  res.send("Failed to authenticate..");
};
