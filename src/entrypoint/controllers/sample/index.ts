import { RouteInterface } from '../../routes';
import { CreateSampleController } from './createSample.controller';
import { FindAllSampleController } from './findAllSample.controller';
import { FindBySampleController } from './findBySample.controller';

export const routes: RouteInterface = {
  '/api/sample': {
    get: new FindAllSampleController(),
    post: new CreateSampleController(),
  },
  '/api/sample/:uuid': {
    get: new FindBySampleController(),
  },
};
