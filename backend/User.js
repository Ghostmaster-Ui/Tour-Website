const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // At least one lowercase, one uppercase, one digit, one special char, 8+ chars
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/.test(value);
      },
      message:
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    }
  },
  otp: {
    type: Number,
    min: 10000,
    max: 99999
  },
  otpExpiry: Date,
  isVerified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
