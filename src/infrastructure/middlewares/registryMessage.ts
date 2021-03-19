import { Message, Handler } from '../messageBus/messageBus.interface';

export const registryMessage = <T>(message: Message<T>, next: Handler) => {
  // eslint-disable-next-line no-console
  console.log(`${message.messageName()}: ${JSON.stringify(message.toJSON())}`);
  return next(message);
};
