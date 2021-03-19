import { MessageBus } from '../messageBus/messageBus';
import { registryMessage } from '../middlewares/registryMessage';

export class CommandBus extends MessageBus {
  constructor() {
    super([registryMessage]);
  }
}
