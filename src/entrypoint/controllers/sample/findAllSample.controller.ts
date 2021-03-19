import { Request, Response } from 'express';
import { FindAllSampleQuery } from '../../../application/query/sample/findAll/findAllSampleQuery';
import { FindAllSampleQueryHandler } from '../../../application/query/sample/findAll/findAllSampleQueryHandler';
import { SampleSearcher } from '../../../domain/service/sample/sampleSearcher';
import { InMemorySampleRepository } from '../../../infrastructure/repository/sample/inMemorySampleRepository';
import { QueryController } from '../query.controller';

export class FindAllSampleController extends QueryController {
  public invoke(req: Request, res: Response): void {
    const { page = 0, limit = 10 } = req.query;
    const query = new FindAllSampleQuery(Number(page), Number(limit));

    //TODO: Inversion of Control
    const repository = InMemorySampleRepository.getInstance();
    const sampleSearcher = new SampleSearcher(repository);

    const result = this.ask(query, (message: FindAllSampleQuery) => {
      const queryHandler = new FindAllSampleQueryHandler(sampleSearcher);
      return queryHandler.handler(message);
    });

    res.json(result);
  }
}
