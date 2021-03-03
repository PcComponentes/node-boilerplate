import { SampleRepository } from '../../model/sample/sample.repository';

export class SampleSearcher {
  private readonly sampleRepository;

  constructor(sampleRepository: SampleRepository) {
    this.sampleRepository = sampleRepository;
  }

  public handler(page: number, limit: number) {
    return this.sampleRepository.find(page, limit);
  }
}
