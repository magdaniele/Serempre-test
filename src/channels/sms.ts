import Channel from '../interfaces/IChannel';

class SmsChannel implements Channel {
  send(message: string): void {
    console.log('Sending **Sms** message: ', message);
  }
}

export default SmsChannel;