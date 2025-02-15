import express from 'express';

import { getProduct, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProduct);

router.post('/', createProduct);

router.delete("/:id", deleteProduct);

router.put('/:id', updateProduct);

export default router;