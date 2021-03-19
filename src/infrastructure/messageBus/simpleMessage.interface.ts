import { Message } from './messageBus.interface';

export abstract class SimpleMessage<T> implements Message<T> {
  private readonly COMPANY: string = process.env.COMPANY || 'company';
  private readonly PROJECT: string = process.env.PROJECT || 'project';
  protected readonly VERSION!: number;
  protected readonly NAME!: string;

  protected abstract messageType(): string;

  public abstract toJSON(): T;

  public messageName(): string {
    return `${this.COMPANY}.${this.PROJECT}.${this.VERSION}.${this.messageType()}.${this.NAME}`;
  }
}
