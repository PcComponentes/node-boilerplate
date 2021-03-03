import { SampleSearcher } from '../../../../domain/service/sample/sampleSearcher';
import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindAllSampleQuery } from './findAllSampleQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FindAllSampleQueryHandler implements QueryHandlerInterface<any> {
  private readonly sampleSearcher;

  constructor(sampleSearcher: SampleSearcher) {
    this.sampleSearcher = sampleSearcher;
  }

  public handler(query: FindAllSampleQuery) {
    return this.sampleSearcher.handler(query.page, query.limit);
  }
}
