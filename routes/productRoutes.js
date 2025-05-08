const express = require("express");
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const { 
  createProduct, 
  getProducts, 
  getProductById 
} = require("../controllers/productController");

const router = express.Router();

router.post("/", auth, upload.array("images"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
