import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import Spring from 'ember-mobile-menu/spring';

export default class SpringyToggleComponent extends Component {
  @tracked position = 0;
  @tracked state = false;

  get from() {
    return this.args.from ?? 0;
  }

  get to() {
    return this.args.to ?? 35;
  }

  get clamp() {
    return this.args.clamp ?? true;
  }

  updatePosition(e) {
    const {
      current: {
        distanceX
      }
    } = e;

    const distance = distanceX + this.fromPosition;
    if (this.dragging) {
      this.position = this.clamp ? Math.min(Math.max(distance, this.from), this.to) : distance;
    } else if (this.position !== 0) {
      this.position = 0;
    }
  }

  @action
  onPanStart(e) {
    if (this.finishTransitionTask.isRunning) {
      this.finishTransitionTask.cancelAll();
      this.preservedVelocity = 0;
    }

    this.fromPosition = this.position;
    this.dragging = true;
    this.updatePosition(e);
  }

  @action
  onPan(e) {
    if (this.dragging) {
      this.updatePosition(e);
    }
  }

  @action
  onPanEnd(e) {
    const {
      current: {
        velocityX
      }
    } = e;

    this.finishTransitionTask.perform(velocityX);
  }

  @(task(function*(currentVelocity = 0, animate = true){
    const fromValue = this.position;
    let toValue = this.position - this.from > (this.to - this.from) / 2
      ? this.to
      : this.from;

    if (currentVelocity > 0.3 || fromValue < -this.to) {
      toValue = this.to;
    } else if(currentVelocity < -0.3 || fromValue > this.to * 2) {
      toValue = this.from;
    }

    if (fromValue !== toValue && animate) {
      const spring = new Spring(s => this.position = s.currentValue, {
        stiffness: 1000,
        mass: 1,
        damping: 20,
        overshootClamping: this.clamp,

        fromValue,
        toValue,
        initialVelocity: this.preservedVelocity || currentVelocity
      });

      try {
        yield spring.start();
      } finally {
        spring.stop();
        this.preservedVelocity = spring.currentVelocity;
      }
    } else {
      this.position = toValue;
      this.preservedVelocity = 0;
    }
  }).restartable())
  finishTransitionTask;

  get style() {
    let styles = 'touch-action: pan-y;';
    if (this.position !== 0) {
      styles += `transform: translateX(${this.position}px);`;
    }
    return htmlSafe(styles);
  }
}
