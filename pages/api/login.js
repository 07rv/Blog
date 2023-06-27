import dbConnect from "../../lib/mongodb";
import User from "../../modal/User";

export default async function handler(req, res) {
  await dbConnect();
  const body = req.body;

  try {
    let singlePerson = await User.findOne({ email: body.email }).exec();
    if (singlePerson) {
      res.status(200).json({ success: true, singlePerson });
    } else {
      res.status(400).json({ success: false, error: "User not already exit" });
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}
