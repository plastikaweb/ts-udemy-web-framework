export class UserForm {
  constructor(public readonly parent: Element) { }

  eventMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderMouseEnter,
    };
  }

  onButtonClick(): void {
    console.log('button click');
  }

  onHeaderMouseEnter(): void {
    console.log('header mouse enter');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input/>
        <button>Click me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}