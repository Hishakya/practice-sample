import mongoose from 'mongoose';

const listenerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user: { type: String, required: true },
  class: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  inserted_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

export const Listener = mongoose.model('Listener', listenerSchema);
