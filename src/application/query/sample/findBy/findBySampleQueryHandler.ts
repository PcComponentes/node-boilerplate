import { QueryHandlerInterface } from '../../queryHandler.interface';
import { FindBySampleQuery } from './findBySampleQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FindBySampleQueryHandler implements QueryHandlerInterface<any> {
  public handler(query: FindBySampleQuery) {
    return { uuid: query.uuid };
  }
}
