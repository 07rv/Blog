import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const Token = mongoose.models.Token || mongoose.model("Token", TokenSchema);

export default Token;
