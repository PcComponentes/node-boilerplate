export interface QueryHandlerInterface<QueryInterface> {
  handler: (query: QueryInterface) => void;
}
