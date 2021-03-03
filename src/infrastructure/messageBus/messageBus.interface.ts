export type Handler = <T>(message: Message<T>) => Response;
export type Middleware = <T>(message: Message<T>, next: Handler) => Response;
export type Chain = <T>(message: Message<T>) => Response;
export type Response<T = unknown> = T;

interface JSONSerializable<T> {
  toJSON: () => T;
}

export interface Message<T> extends JSONSerializable<T> {
  messageName(): string;
}

export interface MessageBusInterface {
  chain: Chain;
  handler: Handler | null;
  addMessageHandler(messageHandler: Handler): void;
  dispatch<T>(message: Message<T>): Response;
  wrapperHandler<T>(message: Message<T>, _: Middleware): Response;
  getMiddlewareChain(middleware: Middleware[]): Chain;
  getMiddlewareWrapper(middleware: Middleware, nextMiddleware: Handler): Chain;
}
