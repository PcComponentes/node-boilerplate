import { NextFunction, Request, Response } from 'express';
import { CommandBus } from '../../infrastructure/bus/command.bus';
import { Command } from '../../infrastructure/messageBus/command.bus.interface';
import { MessageBus } from '../../infrastructure/messageBus/messageBus';

export abstract class CommandController {
  protected readonly messageBus: MessageBus;

  constructor() {
    this.messageBus = new CommandBus();
  }

  abstract invoke(req: Request, res: Response, next: NextFunction): void;

  // TODO: search for corresponding handler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected exec<T>(command: Command<T>, handler?: any) {
    this.messageBus.addMessageHandler(handler);
    this.messageBus.dispatch(command);
  }
}
