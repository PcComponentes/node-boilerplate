import { Request, Response } from 'express';
import { QueryController } from '../quey.controller';

export class FindAllSampleController extends QueryController {
  public invoke(_: Request, res: Response): void {
    res.json({ hello: 'FindAllSampleController' });
  }
}
