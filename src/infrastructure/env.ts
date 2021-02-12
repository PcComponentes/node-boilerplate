export enum EnvMode {
  DEV = 'DEV',
  PROD = 'PROD',
  TEST = 'TEST',
}

export interface EnvKey {
  PORT: string;
  MODE: string;
}

export class Env {
  private env: EnvKey;

  constructor() {
    this.env = {
      PORT: '',
      MODE: EnvMode.DEV,
    };

    const envKeys = Object.keys(this.env) as Array<keyof EnvKey>;

    for (const key of envKeys) {
      const value = process.env[key];

      if (!value) {
        throw new Error(`Missing env key ${key}`);
      } else {
        this.env[key] = value;
      }
    }

    if (Object.keys(EnvMode).indexOf(this.get('MODE')) === -1) {
      throw new Error(`Invalid env MODE value.`);
    }
  }

  public get<T extends keyof EnvKey>(key: T): EnvKey[T] {
    return this.env[key];
  }

  public set<T extends keyof EnvKey>(key: T, value: EnvKey[T]) {
    this.env[key] = value;
  }
}
