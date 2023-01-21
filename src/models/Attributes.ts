import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) { }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    this.data = {
      ...this.data,
      ...update
    }
  }

  getAll(): T {
    return this.data;
  }
}

const a = new Attributes<UserProps>({ id: 3, name: 'sdfs', age: 32 });

const age = a.get('name');
