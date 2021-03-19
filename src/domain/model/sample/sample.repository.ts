import { Sample } from './sample.model';

export interface SampleRepository {
  create: (uuid: Sample['uuid'], task: Sample['task']) => void;
  find: (page: number, limit: number) => Sample[];
  findBy: (uuid: Sample['uuid']) => Sample;
  update: (uuid: Sample['uuid'], task: Sample['task']) => void;
  remove: (uuid: Sample['uuid']) => void;
}
