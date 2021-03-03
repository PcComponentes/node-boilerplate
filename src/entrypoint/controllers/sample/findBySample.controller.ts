import { Request, Response } from 'express';
import { FindBySampleQuery } from '../../../application/query/sample/findBy/findBySampleQuery';
import { FindBySampleQueryHandler } from '../../../application/query/sample/findBy/findBySampleQueryHandler';
import { QueryController } from '../quey.controller';

export class FindBySampleController extends QueryController {
  public invoke(req: Request, res: Response): void {
    const query = new FindBySampleQuery(req.params.uuid);

    // eslint-disable-next-line no-console
    console.log(this);

    const result = this.ask(query, (message: FindBySampleQuery) => {
      const queryHandler = new FindBySampleQueryHandler();
      return queryHandler.handler(message);
    });
    res.json(result);
  }
}
