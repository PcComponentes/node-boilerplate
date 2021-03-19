import { MessageBus } from '../messageBus/messageBus';
import { registryMessage } from '../middlewares/registryMessage';

export class QueryBus extends MessageBus {
  constructor() {
    super([registryMessage]);
  }
}
