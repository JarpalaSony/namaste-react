// models/LostPet.js
import mongoose from 'mongoose';

const lostPetSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  contact: { type: String, required: true },
  petName: { type: String, required: true },
  species: { type: String, required: true },
  lastSeen: { type: String, required: true },
  dateLost: { type: String, required: true },
  additionalInfo: { type: String },
  petPhoto: { type: String }
}, { timestamps: true });

const LostPet = mongoose.model('LostPet', lostPetSchema);
export default LostPet;
