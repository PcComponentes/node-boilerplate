import { SimpleMessage } from './simpleMessage.interface';

export abstract class Command<T> extends SimpleMessage<T> {
  public messageType(): string {
    return 'command';
  }
}
