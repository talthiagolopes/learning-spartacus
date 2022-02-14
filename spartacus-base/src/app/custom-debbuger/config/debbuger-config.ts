export abstract class DebbugerConfig {
  debbugerType?: DebbugerType;
}

export enum DebbugerType {
  SCREEN = "screen",
  CONSOLE = "console",
  NONE = "none"
}
