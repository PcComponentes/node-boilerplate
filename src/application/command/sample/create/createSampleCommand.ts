import { Command } from '../../../../infrastructure/messageBus/command.bus.interface';

export interface CreateSampleCommandInterface {
  uuid: string;
  task: string;
}

export class CreateSampleCommand extends Command<CreateSampleCommandInterface> {
  protected readonly NAME = 'create_sample_command';
  protected readonly VERSION = 1;

  constructor(public readonly uuid: string, public readonly task: string) {
    super();
  }

  public toJSON(): CreateSampleCommandInterface {
    return {
      uuid: this.uuid,
      task: this.task,
    };
  }
}
