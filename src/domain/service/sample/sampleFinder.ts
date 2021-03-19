import { SampleRepository } from '../../model/sample/sample.repository';

export class SampleFinder {
  private readonly sampleRepository;

  constructor(sampleRepository: SampleRepository) {
    this.sampleRepository = sampleRepository;
  }

  public handler(uuid: string) {
    return this.sampleRepository.findBy(uuid);
  }
}
