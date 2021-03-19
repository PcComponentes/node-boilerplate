import { Chain, Middleware, Handler, Response, Message } from './messageBus.interface';

export class MessageBus {
  private readonly chain: Chain;
  private handler: Handler | null;

  constructor(middleware: Middleware[]) {
    this.handler = null;
    this.chain = MessageBus.getMiddlewareChain([...middleware, this.wrapperHandler.bind(this)]);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public addMessageHandler(messageHandler: any): void {
    this.handler = messageHandler;
  }

  public dispatch<T>(message: Message<T>) {
    return null !== this.handler ? this.chain(message) : [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private wrapperHandler<T>(message: Message<T>, _: Handler): Response {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.handler!(message);
  }

  private static getMiddlewareChain(middleware: Middleware[]): Chain {
    let chain: Chain = () => null;

    //TODO ¿Reduce function?
    for (const m of middleware.reverse()) {
      chain = MessageBus.getMiddlewareWrapper(m, chain);
    }
    return chain;
  }

  private static getMiddlewareWrapper(middleware: Middleware, nextMiddleware: Handler): Chain {
    return <T>(message: Message<T>) => {
      return middleware(message, nextMiddleware);
    };
  }
}
