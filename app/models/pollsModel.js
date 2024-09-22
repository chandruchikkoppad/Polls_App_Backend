const mongoose=require("mongoose");

const pollsSchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: String,
  creationDate: Date,
  expiryDate: Date,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  options: [
    {
      optionText: String,
    },
    {
      optionText: String,
    },
    {
      optionText: String,
    }
  ],
});
const Polls=mongoose.model("Polls",pollsSchema)

module.exports=Polls;