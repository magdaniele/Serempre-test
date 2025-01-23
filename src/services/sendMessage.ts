import MailingChannel from '../channels/mail';
import SmsChannel from '../channels/sms';
import WhatsappChannel from '../channels/whatsapp';
import Channel from '../interfaces/IChannel';

type ChannelMap = {
  [key: string]: new () => Channel;
};

const createChannel = (channel: string): Channel | null => {
  const channels: ChannelMap = {
    mail: MailingChannel,
    sms: SmsChannel,
    whatsapp: WhatsappChannel,
  };

  const ChannelClass = channels[channel];
  return ChannelClass ? new ChannelClass() : null;
};

export { createChannel };
