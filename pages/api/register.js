import dbConnect from "../../lib/mongodb";
import User from "../../modal/User";

const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  await dbConnect();

  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);

  const user = await new User({
    firstName: body.firstName,
    lastName: body.lastName,
    fullName: body.fullName,
    email: body.email,
    password: hashPassword,
  });

  try {
    const singlePerson = await User.findOne({ email: body.email }).exec();
    if (singlePerson) {
      res.status(400).json({ success: false, error: "User already exit" });
    } else {
      const newuser = await user.save();
      res.status(200).json({ success: true, newuser });
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}
