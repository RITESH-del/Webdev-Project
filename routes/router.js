const menu = require('../Model/Menu.Model');
const express = require('express');

const router = express.Router();

router.get("/api", (req, res)=>{
        res.render('reviews');   
})

router.get("/", (req, res)=>{
    res.redirect('/login.html')
})

router.post('/add-item', async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const newItem = await Menu.create({
      name,
      price,
      category
    });

    res.json({
      success: true,
      data: newItem
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;