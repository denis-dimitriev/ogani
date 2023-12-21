import { Schema, model } from 'mongoose'

export interface IProduct {
  name: string
  category: string
}

export const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
)

export const Product = model('products', productSchema)
