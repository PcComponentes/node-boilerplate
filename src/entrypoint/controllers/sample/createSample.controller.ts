import { Request, Response } from 'express';
import { CommandController } from '../command.controller';

export class CreateSampleController extends CommandController {
  public invoke(_: Request, res: Response): void {
    res.json({ hello: 'CreateSampleController' });
  }
}
