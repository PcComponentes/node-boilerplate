import { Route } from '../../routes.interfaces';
import { CreateSampleController } from './createSample.controller';
import { FindAllSampleController } from './findAllSample.controller';
import { FindBySampleController } from './findBySample.controller';

export const routes: Route = {
  '/api/sample': {
    get: FindAllSampleController,
    post: CreateSampleController,
  },
  '/api/sample/:uuid': {
    get: FindBySampleController,
  },
};
