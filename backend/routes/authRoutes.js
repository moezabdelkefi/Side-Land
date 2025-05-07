// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs'); // Import bcrypt
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', req.body); // Log the request payload

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { role: user.role } });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/account', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the admin account page' });
});

router.post('/change-password', authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: 'Password changed successfully' });
  } catch (err) {
    console.error('Error changing password:', err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/profile', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: err.message });
  }
});

router.post('/profile-image', authMiddleware, adminMiddleware, upload.single('profileImage'), async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.profileImage = req.file.path;
    await user.save();
    res.json({ message: 'Profile image updated successfully', profileImage: user.profileImage });
  } catch (err) {
    console.error('Error updating profile image:', err);
    res.status(500).json({ message: err.message });
  }
});

router.post('/update-phone', authMiddleware, adminMiddleware, async (req, res) => {
  const { phone } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.phone = phone;
    await user.save();
    res.json({ message: 'Phone number updated successfully', phone: user.phone });
  } catch (err) {
    console.error('Error updating phone number:', err);
    res.status(500).json({ message: err.message });
  }
});

router.post('/update-profile', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.name = name;
    user.email = email;
    user.phone = phone;
    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;