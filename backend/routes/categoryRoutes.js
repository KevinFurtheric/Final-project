const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();

// Create a new category
router.post("/categories", createCategory);

// Get all categories
router.get("/categories", getAllCategories);

// Get a category by ID
router.get("/categories/:id", getCategoryById);

// Update a category
router.put("/categories/:id", updateCategory);

// Delete a category
router.delete("/categories/:id", deleteCategory);

module.exports = router;
