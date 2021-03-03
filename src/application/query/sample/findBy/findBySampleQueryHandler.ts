import { SampleFinder } from '../../../../domain/service/sample/sampleFinder';
import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindBySampleQuery } from './findBySampleQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FindBySampleQueryHandler implements QueryHandlerInterface<any> {
  private readonly sampleFinder: SampleFinder;

  constructor(sampleFinder: SampleFinder) {
    this.sampleFinder = sampleFinder;
  }

  public handler(query: FindBySampleQuery) {
    return this.sampleFinder.handler(query.uuid);
  }
}
