import express from "express";
import dotenv from "dotenv";
import { connectMongo } from './config/db.js';
import { connectRedis } from './config/redisClient.js';
import receiverRoutes from './routes/receiverRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

connectMongo();

connectRedis();

app.use('/receiver', receiverRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Receiver service running on port ${PORT}`));
