const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const WORK_FACTOR = 10;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
  },
},
{
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, WORK_FACTOR)
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((error) => {
        console.error("Password hash process failed", error);
        next(error);
      });
  }
});

userSchema.methods.checkPassword = function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
