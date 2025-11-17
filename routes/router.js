const menu = require('../Model/Menu.Model.js');
const reviews = require('../Model/Reviews.Model.js');
const User = require('../Model/Login.Model.js');
const express = require('express');

const router = express.Router();

// Login page redirect
router.get("/", (req, res)=>{
    res.render('login');
})


router.get('/Home', async (req, res)=>{
  const menuList = await menu.find();
  res.render('index', {data: menuList});
})

const imagesArr = ["https://wallpaperaccess.com/full/7066812.jpg", "https://img.freepik.com/premium-photo/buffet-food-luxury-hotel-catering-kitchen-concept-with-variety-display_1091270-40435.jpg",
"https://img.freepik.com/premium-photo/buffet-food-luxury-restaurant_1031776-22637.jpg", "https://img.freepik.com/premium-photo/delectable-restaurant-food-poster_1077802-194234.jpg",
"https://thumbs.dreamstime.com/b/food-content-creator-top-view-sauces-303915923.jpg", "https://duyt4h9nfnj50.cloudfront.net/resized/1a1c800328bb6427a906e45371c3c34f-w2880-56.jpg"
];

router.get('/MenuCard:id', async (req, res)=>{
  const cardID = req.params.id;
  const reviewList = await reviews.find();
   res.render('order.ejs', {image: imagesArr[cardID], data: reviewList});
})

// api endpoints
router.get("/api/menu-items", async (req, res)=>{
 try { 
  const menuItems = await menu.find();

  res.json({success: true,
    count: menuItems.length,
    data: menuItems
  });
} catch(err){
  res.status(404).json({error: err.message});
}
})

router.get("/api/reviews", async (req, res)=>{
      try {
        const reviewList = await reviews.find(); //find all

        res.json({
          success: true,
          count: reviewList.length,
          data: reviewList
        });
      } catch(err) {
        res.status(500).json({error: err.message});
      }
})

// Add menu items
router.post('/add-item', async (req, res) => {
  try {
    const { price, image, rating, delivery_time, item, location  } = req.body;

    const newItem = await menu.create({
      price,
      image,
      rating,
      delivery_time,
      item,
      location
    });

    res.json({
      success: true,
      data: newItem
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add reviews
router.post('/add-reviews', async(req, res) => {
  try {
    const {name, contributions, star, date, description} = req.body;
    const newReview = await reviews.create({
      name,
      contributions,
      star,
      date,
      description
    })

    // res.json({success: true, data: newReview});
    res.redirect('MenuCard2');

  } catch(err){
    res.status(500).json({error: err.message});
  }})

router.delete('/delete-review/:id', async (req, res) => {
    await reviews.findByIdAndDelete(req.params.id);
    res.redirect('MenuCard2'); // reloads same page
})

router.get('/edit-review/:id', async (req, res) => {
  const review = await reviews.findById(req.params.id);
  res.render('editReview.ejs', { review });
});

// Edit reviews 
router.post('/update-review/:id', async (req, res) => {
  await reviews.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/MenuCard2');  // or back to the product page
});

//Login page setup
router.post("/login-data", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if fields exist
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Success
    // res.status(200).json({ message: "Login successful", user });
    res.redirect('home');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

//registered users
router.post("/register/data", async (req, res) => {
  try {
    const {email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({
      email,
      password,   // gets hashed by mongoose pre-save hook
    });

    await user.save();

    res.status(201).json({
      message: "User saved successfully",
      user,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error", err });
  }
});




module.exports = router;