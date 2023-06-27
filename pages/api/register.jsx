import dbConnect from "../../lib/mongodb";
import User from "../../modal/User";

export default async function handler(req, res) {
  await dbConnect();

  const body = req.body;
  const user = await new User(
    {
      firstName: body.firstName,
      lastName: body.lastName,
      fullName: body.fullName,
      email: body.email,
      password: body.password,
    },
    {
      version: false,
    }
  );
  const newuser = await user.save();
  res.status(200).json({ newuser });
}
