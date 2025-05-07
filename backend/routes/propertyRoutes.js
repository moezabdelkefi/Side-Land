const express = require('express');
const router = express.Router();
const { createProperty, getProperties, getProperty, updateProperty, deleteProperty, uploadImages } = require('../controllers/propertyController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, adminMiddleware, uploadImages, createProperty);
router.get('/', getProperties);
router.get('/:id', getProperty);
router.put('/:id', authMiddleware, adminMiddleware, uploadImages, updateProperty);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProperty);

module.exports = router;