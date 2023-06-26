import { dbConnect } from "../../lib/mongodb";
import User from "../../modal/User";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json(error));
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: "werftghjg" });
      } catch (error) {
        res.status(405).json({ success: "1234t" });
      }
  }
}
