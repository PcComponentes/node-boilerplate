import { Query } from '../../../../infrastructure/messageBus/query.bus.interface';

interface FindBySampleQueryInterface {
  uuid: string;
}

export class FindBySampleQuery extends Query<FindBySampleQueryInterface> {
  protected readonly NAME = 'find_by_sample_query';
  protected readonly VERSION = 1;

  constructor(public readonly uuid: string) {
    super();
  }

  public toJSON(): FindBySampleQueryInterface {
    return {
      uuid: this.uuid,
    };
  }
}
