import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindAllSampleQuery } from './findAllSampleQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FindAllSampleQueryHandler implements QueryHandlerInterface<any> {
  public handler(query: FindAllSampleQuery) {
    return { page: query.page, limit: query.limit };
  }
}
