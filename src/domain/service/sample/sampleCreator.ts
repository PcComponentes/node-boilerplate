import { SampleRepository } from '../../model/sample/sample.repository';

export class SampleCreator {
  private readonly sampleRepository;

  constructor(sampleRepository: SampleRepository) {
    this.sampleRepository = sampleRepository;
  }

  public handler(uuid: string, task: string) {
    return this.sampleRepository.create(uuid, task);
  }
}
