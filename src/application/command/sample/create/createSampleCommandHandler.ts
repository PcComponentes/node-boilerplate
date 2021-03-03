import { CommandHandlerInterface } from '../../commandHandler.interface';
import { CreateSampleCommand } from './createSampleCommand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CreateSampleQueryHandler implements CommandHandlerInterface<any> {
  public exec(command: CreateSampleCommand) {
    // eslint-disable-next-line no-console
    console.log({ uuid: command.uuid, task: command.task });
  }
}
