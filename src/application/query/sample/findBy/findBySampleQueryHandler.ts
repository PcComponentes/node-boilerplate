import { SampleFinder } from '../../../../domain/service/sample/sampleFinder';
import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindBySampleQuery } from './findBySampleQuery';

export class FindBySampleQueryHandler implements QueryHandlerInterface<FindBySampleQuery> {
  private readonly sampleFinder: SampleFinder;

  constructor(sampleFinder: SampleFinder) {
    this.sampleFinder = sampleFinder;
  }

  public handler(query: FindBySampleQuery) {
    return this.sampleFinder.handler(query.uuid);
  }
}
