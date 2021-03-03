import { Request, Response } from 'express';
import { QueryController } from '../quey.controller';

export class FindBySampleController extends QueryController {
  public invoke(req: Request, res: Response): void {
    res.json({ hello: `FindBySampleController: ${req.params.uuid}` });
  }
}
