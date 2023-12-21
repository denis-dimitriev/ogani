import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
})

export const Categories = model('Categories', schema)