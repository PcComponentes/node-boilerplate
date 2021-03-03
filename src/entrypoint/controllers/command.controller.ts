import { NextFunction, Request, Response } from 'express';

export abstract class CommandController {
  abstract invoke(req: Request, res: Response, next: NextFunction): void;
}
