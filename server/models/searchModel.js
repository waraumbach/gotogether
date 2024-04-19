import { Search } from "@mui/icons-material";
import mongoose, { Schema } from "mongoose";

const searchSchema = new mongoose.Schema({
  id: Number,
  name: String,
  region: String,
  reviews:String,
});

const Search = mongoose.model("Search", searchSchema);

export default Search;