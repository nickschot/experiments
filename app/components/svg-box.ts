import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface SvgBoxArgs {
  strokeWidth?: number;
}

export default class SvgBoxComponent extends Component<SvgBoxArgs> {
  @tracked width = 0;
  @tracked height = 0;
  @tracked radius = 0;

  get strokeWidth() {
    return this.args.strokeWidth ?? 1;
  }

  get viewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

  get circumference() {
    return (this.width + this.height) * 2 + (2*Math.PI*this.radius) - 8*this.radius;
  }

  get halfCircumference() {
    return this.circumference / 2;
  }

  get path() {
    const c = this.strokeWidth / 2;
    const r = this.radius;

    if (r) {
      return `
       M${r} ${c}
       H${this.width - r}
       A${r-c} ${r-c} 0 0 1 ${this.width - c} ${r}
       V${this.height - r}
       A${r-c} ${r-c} 0 0 1 ${this.width - r} ${this.height - c}
       H${r}
       A${r-c} ${r-c} 0 0 1 ${c} ${this.height - r}
       V${r}
       A${r-c} ${r-c} 0 0 1 ${r} ${c}`;
    } else {
      return `M${c} ${c} H${this.width - c} V${this.height - c} H${c} Z`;
    }
  }

  get pathTop() {
    const c = this.strokeWidth / 2;
    const r = this.radius;

    if (r) {
      return `
       M${r} ${c}
       H${this.width - r}
       A${r-c} ${r-c} 0 0 1 ${this.width - c} ${r}
       V${this.height - r}
       A${r-c} ${r-c} 0 0 1 ${this.width - r} ${this.height - c}`
    } else {
      return `M${c} ${c} H${this.width - c} V${this.height - c} H${c} Z`;
    }
  }

  get pathBottom() {
    const c = this.strokeWidth / 2;
    const r = this.radius;

    if (r) {
      return `
       M${c+r} ${c}
       A${r-c} ${r-c} 0 0 0 ${c} ${r}
       V${this.height - r}
       A${r-c} ${r-c} 0 0 0 ${r} ${this.height - c}
       H${this.width - r}`
    } else {
      return `M${c} ${c} H${this.width - c} V${this.height - c} H${c} Z`;
    }
  }

  @action
  render(element: HTMLElement) {
    const {
      width,
      height
    } = element.getBoundingClientRect();

    this.width = width;
    this.height = height;
    this.radius = parseInt(element.style.borderRadius); // TODO: only px support right now
  }
}
