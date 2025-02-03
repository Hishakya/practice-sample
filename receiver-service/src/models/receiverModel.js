import mongoose from 'mongoose';

const receiverSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user: { type: String, required: true },
  class: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  inserted_at: { type: Date, default: Date.now },
});

const Receiver = mongoose.model("Receiver", receiverSchema);

export default Receiver;
