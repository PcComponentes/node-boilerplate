import { Sample } from '../../../domain/model/sample/sample.model';
import { SampleRepository } from '../../../domain/model/sample/sample.repository';

export class InMemorySampleRepository implements SampleRepository {
  private samples: Sample[];

  public static instance: InMemorySampleRepository;

  constructor() {
    this.samples = [new Sample('75d6573e-d323-4814-af60-984dc886ffa7', 'task 1')];
  }

  public static getInstance(): InMemorySampleRepository {
    if (!InMemorySampleRepository.instance) {
      InMemorySampleRepository.instance = new InMemorySampleRepository();
    }

    return InMemorySampleRepository.instance;
  }

  public create(uuid: Sample['uuid'], task: Sample['task']) {
    const sample = new Sample(uuid, task);
    this.samples.push(sample);
  }

  public find(page: number, limit: number): Sample[] {
    const initial = page * limit;
    return this.samples.slice(initial, initial + limit);
  }

  public findBy(uuid: Sample['uuid']): Sample {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const sample = this.samples.find((sample) => sample.uuid === uuid)!;
    return sample;
  }

  public update(uuid: Sample['uuid'], task: Sample['task']): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const originalSample = this.samples.find((sample) => sample.uuid === uuid)!;
    this.samples = this.samples.map((sample) =>
      sample.uuid === uuid ? new Sample(originalSample.uuid, task || originalSample.task) : sample
    );
  }

  public remove(uuid: string): void {
    this.samples = this.samples.filter((sample) => sample.uuid !== uuid);
  }
}
