import dbConnect from "../../lib/mongodb";
import User from "../../modal/User";
import Token from "@/modal/Token";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  await dbConnect();
  const body = req.body;

  try {
    let singlePerson = await User.findOne({ email: body.email }).exec();
    if (singlePerson) {
      const password = await User.findOne({ email: body.email })
        .select("password")
        .exec();
      const hash = await bcrypt.compare(body.password, password.password);
      if (hash) {
        const user = {
          firstName: singlePerson.firstName,
          lastName: singlePerson.lastName,
          fullName: singlePerson.fullName,
          email: singlePerson.email,
        };
        const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, {
          expiresIn: "15m",
        });
        const refreshToken = jwt.sign(user, process.env.REFRESH_SECRET_KEY);

        const token = await new Token({
          token: accessToken,
        });
        await token.save();

        res.status(200).json({
          success: true,
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: user,
        });
      } else {
        res.status(400).json({ success: false, error: "Wrong password" });
      }
    } else {
      res.status(400).json({ success: false, error: "User not already exit" });
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}
