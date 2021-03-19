import { Query } from '../../../../infrastructure/messageBus/query.bus.interface';
import { FindAllSampleQueryInterface } from './findAllSample.interfaces';

export class FindAllSampleQuery extends Query<FindAllSampleQueryInterface> {
  protected readonly NAME = 'find_all_sample_query';
  protected readonly VERSION = 1;

  constructor(public readonly page: number, public readonly limit: number) {
    super();
  }

  public toJSON(): FindAllSampleQueryInterface {
    return {
      page: this.page,
      limit: this.limit,
    };
  }
}
