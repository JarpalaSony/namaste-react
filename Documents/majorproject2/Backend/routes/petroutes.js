import express from 'express';
import multer from 'multer';
import path from 'path';
import Pet from '../models/Pet.js';

const petrouter = express.Router();

// Storage config for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage });

// POST: Add new pet
petrouter.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, type, age, breed } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    const newPet = new Pet({
      name,
      type,
      age,
      breed,
      imageUrl
    });

    await newPet.save();
    res.status(201).json({ message: 'Pet added successfully', pet: newPet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add pet' });
  }
});

// GET: Fetch all pets
petrouter.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
});

export default petrouter;
