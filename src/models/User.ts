interface UserProps {
  name: string;
  age: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private props: UserProps) { }

  get(propName: string): string | number {
    return this.props[propName];
  }

  set(update: Partial<UserProps>): void {
    this.props = {
      ...this.props,
      ...update
    }
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach(callback => callback());
  }
}
