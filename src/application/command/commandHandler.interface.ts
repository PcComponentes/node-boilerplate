export interface CommandHandlerInterface<CommandInterface> {
  exec: (command: CommandInterface) => void;
}
