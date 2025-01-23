import Channel from '../interfaces/IChannel';

class WhatsappChannel implements Channel {
  send(message: string): void {
    console.log('Sending **Whatsapp** message: ', message);
  }
}

export default WhatsappChannel;