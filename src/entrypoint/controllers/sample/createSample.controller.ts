import { Request, Response } from 'express';
import { CreateSampleCommand } from '../../../application/command/sample/create/createSampleCommand';
import { CreateSampleQueryHandler } from '../../../application/command/sample/create/createSampleCommandHandler';
import { CommandController } from '../command.controller';

export class CreateSampleController extends CommandController {
  public invoke(req: Request, res: Response): void {
    const command = new CreateSampleCommand(req.body.uuid, req.body.task);

    this.exec(command, (message: CreateSampleCommand) => {
      const commandHandler = new CreateSampleQueryHandler();
      return commandHandler.exec(message);
    });

    res.json({});
  }
}
