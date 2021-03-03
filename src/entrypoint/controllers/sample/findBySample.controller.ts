import { Request, Response } from 'express';
import { FindBySampleQuery } from '../../../application/query/sample/findBy/findBySampleQuery';
import { FindBySampleQueryHandler } from '../../../application/query/sample/findBy/findBySampleQueryHandler';
import { SampleFinder } from '../../../domain/service/sample/sampleFinder';
import { InMemorySampleRepository } from '../../../infrastructure/repository/sample/inMemorySampleRepository';
import { QueryController } from '../quey.controller';

export class FindBySampleController extends QueryController {
  public invoke(req: Request, res: Response): void {
    const query = new FindBySampleQuery(req.params.uuid);

    //TODO: Inversion of Control
    const repository = InMemorySampleRepository.getInstance();
    const sampleFinder = new SampleFinder(repository);

    const result = this.ask(query, (message: FindBySampleQuery) => {
      const queryHandler = new FindBySampleQueryHandler(sampleFinder);
      return queryHandler.handler(message);
    });

    res.json(result);
  }
}
