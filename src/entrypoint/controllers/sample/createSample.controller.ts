import { Request, Response } from 'express';
import { CreateSampleCommand } from '../../../application/command/sample/create/createSampleCommand';
import { CreateSampleQueryHandler } from '../../../application/command/sample/create/createSampleCommandHandler';
import { SampleCreator } from '../../../domain/service/sample/sampleCreator';
import { InMemorySampleRepository } from '../../../infrastructure/repository/sample/inMemorySampleRepository';
import { CommandController } from '../command.controller';

export class CreateSampleController extends CommandController {
  public invoke(req: Request, res: Response): void {
    const command = new CreateSampleCommand(req.body.uuid, req.body.task);

    //TODO: Inversion of Control
    const repository = InMemorySampleRepository.getInstance();
    const sampleCreator = new SampleCreator(repository);

    this.exec(command, (message: CreateSampleCommand) => {
      const commandHandler = new CreateSampleQueryHandler(sampleCreator);
      return commandHandler.exec(message);
    });

    res.status(201).json({});
  }
}
