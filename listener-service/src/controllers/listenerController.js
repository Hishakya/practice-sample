import { Listener } from '../models/listenerModel.js';

export const getListeners = async (req, res) => {
  try {
    console.log("in route lsntr");
    
    const records = await Listener.find();
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
