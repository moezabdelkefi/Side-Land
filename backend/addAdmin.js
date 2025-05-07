// backend/addAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const addAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const plainPassword = 'moez123*M';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const adminUser = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user created with email: admin@example.com and password:', plainPassword);
    mongoose.connection.close();
  } catch (err) {
    console.error('Error creating admin user', err);
    mongoose.connection.close();
  }
};

addAdmin();