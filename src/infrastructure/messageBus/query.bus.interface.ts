import { SimpleMessage } from './simpleMessage.interface';

export abstract class Query<T> extends SimpleMessage<T> {
  public messageType(): string {
    return 'query';
  }
}
