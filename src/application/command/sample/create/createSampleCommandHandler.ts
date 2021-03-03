import { SampleCreator } from '../../../../domain/service/sample/sampleCreator';
import { CommandHandlerInterface } from '../../commandHandler.interface';
import { CreateSampleCommand } from './createSampleCommand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CreateSampleQueryHandler implements CommandHandlerInterface<any> {
  private readonly sampleCreator: SampleCreator;

  constructor(sampleCreator: SampleCreator) {
    this.sampleCreator = sampleCreator;
  }

  public exec(command: CreateSampleCommand) {
    this.sampleCreator.handler(command.uuid, command.task);
  }
}
