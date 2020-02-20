import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CursorTrackerService from '../services/cursor-tracker';

function getPointDistance(x0: number, x1: number, y0: number, y1: number): number {
  return (Math.sqrt(((x1 - x0) * (x1 - x0)) + ((y1 - y0) * (y1 - y0))));
}

function getAngle(originX: number, originY: number, projectionX: number, projectionY: number): number {
  const angle = Math.atan2(projectionY - originY, projectionX - originX) * ((180) / Math.PI);
  return 360 - ((angle < 0) ? (360 + angle) : angle);
}

interface ButtonArgs {}

export default class Button extends Component<ButtonArgs> {
  @service cursorTracker!: CursorTrackerService;

  private boundTransformButton: (e: MouseEvent) => void;
  private button?: HTMLElement;
  @tracked buttonStyle: string = '';
  @tracked animationClass = '';

  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);

    this.boundTransformButton = this.transformButton.bind(this);
    this.cursorTracker.add(this.boundTransformButton);
  }

  willDestroy() {
    this.cursorTracker.remove(this.boundTransformButton);
  }

  @action
  animateClick(e: MouseEvent | TouchEvent): void {
    if (this.button) {
      const btnWidth = this.button.offsetWidth;
      const x = e instanceof MouseEvent
        ? e.offsetX
        : e.targetTouches[0].pageX - this.button.getBoundingClientRect().left;

      if (x < btnWidth / 6) {
        this.animationClass = 'strong-left-press';
      } else if (x > btnWidth / 6 * 5) {
        this.animationClass = 'strong-right-press';
      } else if (x < btnWidth / 3) {
        this.animationClass = 'left-press';
      } else if (x > btnWidth / 3 * 2) {
        this.animationClass = 'right-press';
      }
    }
  }

  @action
  stopAnimateClick(): void {
    this.animationClass = '';
  }

  transformButton({ clientX, clientY }: MouseEvent): void {
    if (this.button) {
      const btnCoords = this.button.getBoundingClientRect();
      const btnHalfWidth = btnCoords.width / 2;
      const btnHalfHeight = btnCoords.height / 2;
      const btnX = btnCoords.left + btnHalfWidth;
      const btnY = btnCoords.top + btnHalfHeight;

      const minDistance = Math.max(btnHalfWidth, btnHalfHeight) + 10;
      const maxDistance = 400;
      const distance = getPointDistance(clientX, btnX, clientY, btnY);

      if (distance <= minDistance || distance > maxDistance) {
        this.buttonStyle = '';
      } else {
        const angle = getAngle(btnX, btnY, clientX, clientY);
        const rad = angle * (Math.PI/180);

        const multiplier = distance / ((maxDistance - minDistance) / 10);
        const rx = Math.sin(rad) * multiplier;
        const ry = Math.cos(rad) * multiplier;

        this.buttonStyle = `transform: translateY(-15%) rotateX(${rx}deg) rotateY(${ry}deg);`;
      }
    }
  }
}
