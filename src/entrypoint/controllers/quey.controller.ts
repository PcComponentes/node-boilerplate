import { NextFunction, Request, Response } from 'express';

export abstract class QueryController {
  abstract invoke(req: Request, res: Response, next: NextFunction): void;
}
