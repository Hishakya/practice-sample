import { createClient } from "redis";


export const connectRedis = async () => {
  
  const redisClient = createClient({
    socket: {
      host: process.env.REDIS_HOST || "redis", 
      port: process.env.REDIS_PORT || 6379,
    },
  });

  try {
    await redisClient.connect();
    console.log('Connected to Redis');
    return redisClient
  } catch (error) {
    console.error('Error connecting to Redis:', error);
  }
};
