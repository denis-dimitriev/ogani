import { Request, Response } from 'express'
import { Product } from '../models/product.model'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category } = req.body

    const products = await Product.create({ name, category })

    res.status(200).json({
      status: 'Success',
      data: products
    })
  } catch (e) {
    console.log(e)
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'success',
      data: products
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot get products'
    })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'success',
      data: products
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot get products'
    })
  }
}
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'success',
      data: products
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot get products'
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json({
      status: 'success',
      data: products
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot get products'
    })
  }
}
