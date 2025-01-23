import Channel from '../interfaces/IChannel';

class MailingChannel implements Channel {
  send(message: string): void {
    console.log('Sending **Mailing** message: ', message);
  }
}

export default MailingChannel;
