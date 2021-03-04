import { SampleCreator } from '../../../../domain/service/sample/sampleCreator';
import { CommandHandlerInterface } from '../../commandHandler.interface';
import { CreateSampleCommand } from './createSampleCommand';

export class CreateSampleQueryHandler implements CommandHandlerInterface<CreateSampleCommand> {
  private readonly sampleCreator: SampleCreator;

  constructor(sampleCreator: SampleCreator) {
    this.sampleCreator = sampleCreator;
  }

  public exec(command: CreateSampleCommand) {
    this.sampleCreator.handler(command.uuid, command.task);
  }
}
