import { modifier } from 'ember-modifier';

export default modifier(function containerRelativeShape(element) {
  const parentStyle = getComputedStyle(element.parentElement);
  const radius = parseInt(parentStyle['border-radius'], 10);
  const padding = parseInt(parentStyle.padding, 10);
  element.style.borderRadius = `${radius - padding}px`;
});
