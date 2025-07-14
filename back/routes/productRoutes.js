
import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();
router.get('/',async(req,res)=>{const prods=await Product.find();res.json(prods)});
router.post('/',async(req,res)=>{const {name,price,category}=req.body;const p=await Product.create({name,price,category});res.status(201).json(p)});
export default router;
