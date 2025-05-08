const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
      expiresIn: "1d" 
    });

    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    //enteder esse metodo compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Senha incorreta" });

    //entender esse metodo sign
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
