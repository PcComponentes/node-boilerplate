import { Request, Response } from 'express';
import { FindAllSampleQuery } from '../../../application/query/sample/findAll/findAllSampleQuery';
import { FindAllSampleQueryHandler } from '../../../application/query/sample/findAll/findAllSampleQueryHandler';
import { QueryController } from '../quey.controller';

export class FindAllSampleController extends QueryController {
  public invoke(req: Request, res: Response): void {
    const query = new FindAllSampleQuery(Number(req.query.page), Number(req.query.limit));

    const result = this.ask(query, (message: FindAllSampleQuery) => {
      const queryHandler = new FindAllSampleQueryHandler();
      return queryHandler.handler(message);
    });
    res.json(result);
  }
}
