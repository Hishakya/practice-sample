import { v4 as uuidv4 } from "uuid";
import Receiver from "../models/receiverModel.js";
import receiverSchema from "../validation/receiverValidation.js";
import { connectRedis } from "../config/redisClient.js";

export const createReceiver = async (req, res) => {
  try {
    const { error, value } = receiverSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const id = uuidv4();
    const inserted_at = new Date();

    const data = { id, ...value, inserted_at };
    const newRecord = new Receiver(data);
    const result = await newRecord.save();
    console.log("Data saved in MongoDB", result);

    const redisClient = await connectRedis();
    const redisData = await redisClient.publish("new_record", JSON.stringify(data));

    res.status(201).json({ message: "Data received", result: result, redis: redisData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getReceivers = async (req, res) => {
  try {
    const records = await Receiver.find();
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
