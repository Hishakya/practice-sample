import mongoose from 'mongoose';

export const connectMongo = () => {
  let mongoDbUri = "mongodb+srv://abc:abc.456@cluster0.abc.mongodb.net/SampleDBSuziki"
  const mongoUri = process.env.MONGO_URI || mongoDbUri;
  mongoose.connect(mongoUri, {
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
};
