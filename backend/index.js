const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const announcementRoute = require("./routes/announcementRoute");
const photoRoute = require("./routes/photoRoute");
const userRoute = require("./routes/userRoute.js");
require("dotenv").config();
const User = require("./models/User.js");

const app = express();

mongoose
  .connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"));

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));
app.use(express.static(__dirname));

//Routes
app.post("/login", async (req, res, next) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });
  let same = false;

  if (user) {
    if (user.password === password) {
      same = true;
    }
  } else {
    return res.status(401).redirect(`${process.env.CLIENT_URL}`);
  }
  if (same) {
    const token = createToken(user._id);
    res.json({ token });
  } else {
    return res.status(401).redirect(`${process.env.CLIENT_URL}/#/admin`);
  }
});
app.use("/", userRoute);
app.use("/", photoRoute);
app.use("/", announcementRoute);

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
