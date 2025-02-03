
import express from "express";
import dotenv from "dotenv";
import { connectMongo } from './config/db.js';
import { connectRedis } from './config/redisClient.js';
import listenerRoutes from './routes/listenerRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

connectMongo();
connectRedis();

app.use('/listener', listenerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listener service running on port ${PORT}`));
