
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routers');
const dachbord = require('./routes/dachbord');
const google_router = require("./routes/google_route");
const session = require("express-session");
const passport = require("passport");
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.use('/dachbord', dachbord);
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




app.use(google_router);





const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
