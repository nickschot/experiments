import Service from '@ember/service';

export default class CursorTrackerService extends Service {
  private callbacks = new Set<(e: MouseEvent) => void>();
  private boundHandleCallbacks: (e: MouseEvent) => void;

  constructor() {
    super(...arguments);

    this.boundHandleCallbacks = this.handleCallbacks.bind(this);
  }

  private addListener() {
    window.addEventListener('mousemove', this.boundHandleCallbacks);
  }

  private removeListener() {
    window.removeEventListener('mousemove', this.boundHandleCallbacks);
  }

  private handleCallbacks(e: MouseEvent) {
    this.callbacks.forEach(cb => cb(e));
  }

  add(callback: (e: MouseEvent) => any) {
    if (!this.callbacks.size) {
      this.addListener();
    }

    this.callbacks.add(callback);
  }

  remove(callback: (e: MouseEvent) => any) {
    this.callbacks.delete(callback);

    if (this.callbacks.size === 0) {
      this.removeListener();
    }
  }

  willDestroy(): void {
    this.removeListener();
    this.callbacks.clear();

    super.willDestroy();
  }
}
