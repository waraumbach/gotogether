import { Search } from "@mui/icons-material";
import mongoose, { Schema } from "mongoose";

const searchSchema = new mongoose.Schema({
  title: String,
  gener: String,
  year: Number,
});

const Movie = mongoose.model("Search", movieSchema);

export default Search;