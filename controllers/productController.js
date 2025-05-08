const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body)
    const { name, description, price, category } = req.body;
    const images = req.files.map(file => file.path);
    
    const product = new Product({
      name,
      description,
      price,
      category,
      images,
      seller: req.user.id
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("seller", "name");
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("seller", "name");
  if (!product) return res.status(404).json({ error: "Produto não encontrado" });
  res.json(product);
};