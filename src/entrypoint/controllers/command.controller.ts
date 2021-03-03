import { NextFunction, Request, Response } from 'express';
import { CommandBus } from '../../infrastructure/bus/command.bus';
import { MessageBus } from '../../infrastructure/messageBus/messageBus';

export abstract class CommandController {
  protected readonly messageBus: MessageBus;

  constructor() {
    this.messageBus = new CommandBus();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract invoke(req: any, reply: any): any;

  abstract invoke(req: Request, res: Response, next: NextFunction): void;

  // TODO: search for corresponding handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected exec(command: any, handler?: any) {
    this.messageBus.addMessageHandler(handler);
    this.messageBus.dispatch(command);
  }
}
