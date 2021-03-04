import { SampleSearcher } from '../../../../domain/service/sample/sampleSearcher';
import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindAllSampleQuery } from './findAllSampleQuery';

export class FindAllSampleQueryHandler implements QueryHandlerInterface<FindAllSampleQuery> {
  private readonly sampleSearcher;

  constructor(sampleSearcher: SampleSearcher) {
    this.sampleSearcher = sampleSearcher;
  }

  public handler(query: FindAllSampleQuery) {
    return this.sampleSearcher.handler(query.page, query.limit);
  }
}
