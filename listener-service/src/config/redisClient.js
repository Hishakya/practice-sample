import { createClient } from 'redis';
import { Listener } from '../models/listenerModel.js';

// export const connectRedis = () => {
//   const redisClient = createClient({
//     socket: {
//       host: process.env.REDIS_HOST || 'localhost',
//       port: process.env.REDIS_PORT || 6379,
//     },
//   });


  export const connectRedis = async () => {
    
    const redisClient = createClient({
      socket: {
        host: process.env.REDIS_HOST || "redis", 
        port: process.env.REDIS_PORT || 6379,
      },
    });
  
    try {
  
      await redisClient.connect();
      console.log('Connected to Redis listenr');
    } catch (error) {
      console.error('Error connecting to Redis:', error);
    }



  redisClient.subscribe('new_record', async (message) => {
    try {
      const data = JSON.parse(message);
      const modified_at = new Date();
      console.log('In Listener, received message:', data);

      const newRecord = new Listener({ ...data, modified_at });
      await newRecord.save();

      console.log('Data processed and saved:', newRecord);
    } catch (err) {
      console.error('Error processing Redis message:', err.message);
    }
  });
};
