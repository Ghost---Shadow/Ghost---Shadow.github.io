/* eslint-disable no-param-reassign */
const sketch = (p) => {
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    canvasWidth = props.width;
    canvasHeight = props.height;
    p.resizeCanvas(props.width, props.height);
  };

  p.draw = () => {
    p.background(255);
    p.fill(30);
    p.noStroke();
    p.rect(30, 20, 55, 55, 20);
  };
};
/* eslint-enable no-param-reassign */

export default sketch;
