import mongoose, { model, Schema } from "mongoose";

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/second-brain')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define User Schema
const UserSchema = new Schema({
    username: { type: String, unique: true, required: true }, // Ensure username is required
    password: { type: String, required: true } // Ensure password is required
});

// Define Content Schema
const ContentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true }, 
    type:String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }], // Reference to Tag model
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true } // Reference to User model
});

// Create and export models
export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

  export const LinkModel = model("Link",LinkSchema)