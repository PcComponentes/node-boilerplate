import { NextFunction, Request, Response } from 'express';
import { QueryBus } from '../../infrastructure/bus/query.bus';
import { MessageBus } from '../../infrastructure/messageBus/messageBus';

export abstract class QueryController {
  protected readonly messageBus: MessageBus;

  constructor() {
    this.messageBus = new QueryBus();
  }

  abstract invoke(req: Request, res: Response, next: NextFunction): void;

  // TODO: search for corresponding handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected ask(query: any, handler?: any) {
    this.messageBus.addMessageHandler(handler);
    return this.messageBus.dispatch(query);
  }
}
