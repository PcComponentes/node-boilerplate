import { Route } from '../../routes.interfaces';
import { CreateSampleController } from './createSample.controller';
import { FindAllSampleController } from './findAllSample.controller';
import { FindBySampleController } from './findBySample.controller';

export const routes: Route = {
  '/v1/sample': {
    get: FindAllSampleController,
    post: CreateSampleController,
  },
  '/v1/sample/:uuid': {
    get: FindBySampleController,
  },
};
