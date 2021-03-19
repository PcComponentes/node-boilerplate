import { Message, Handler } from '../../../../src/infrastructure/messageBus/messageBus.interface';

export const registryMessage = <T>(message: Message<T>, next: Handler) => {
  return next(message);
};
