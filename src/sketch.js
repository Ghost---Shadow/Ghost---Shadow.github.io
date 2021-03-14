import Rect from './rect';

/* eslint-disable no-param-reassign */
const sketch = (p) => {
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let rect = null;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    rect = new Rect({
      p, speed: 0.1, legLength: 50, feetLength: 10, width: 150, height: 50, x: 0, y: 0,
    });
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    canvasWidth = props.width;
    canvasHeight = props.height;
    p.resizeCanvas(props.width, props.height);
  };

  p.draw = () => {
    p.background(255);
    rect.draw();
  };
};
/* eslint-enable no-param-reassign */

export default sketch;
