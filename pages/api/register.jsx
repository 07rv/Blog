import connect from "../../lib/mongodb";
import User from "../../modal/schema";

connect();

export default async function handler(req, res) {
  try {
    const user = await User.create(req.body);
  } catch (error) {}
}
