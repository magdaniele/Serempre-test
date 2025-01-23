import { Request, Response } from "express";
import IChannel from "../interfaces/IChannel"; 
import { createChannel } from "../services/sendMessage";
export const createMessage = (req: Request, res: Response): Response => {
  const { channel } = req.params;
  const { message } = req.body;

  if (typeof message !== 'string') {
    return res.status(400).json({ message: 'Message must be a string' });
  }

  const channelGenerated: IChannel | null = createChannel(channel);
  if (!channelGenerated) {
    return res.status(400).json({ message: 'The channel that you are trying to use is not available' });
  }

  channelGenerated.send(message);

  return res.status(200).json({ message: 'Message sent successfully' });
};

