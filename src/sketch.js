/* eslint-disable no-param-reassign */
const sketch = (p) => {
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    // p.textSize(16);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    canvasWidth = props.width;
    canvasHeight = props.height;
    p.resizeCanvas(props.width, props.height);
  };

  p.draw = () => {
    p.background(255);
    const RECT_COLOR = 30;
    const SPEED = 0.2;
    p.fill(RECT_COLOR);
    p.noStroke();
    const rectX = 250;
    const rectY = 100;
    const rectW = 150;
    const rectH = 50;
    p.push();
    p.translate(rectX + rectW / 2, rectY + rectH / 2);
    p.rotate(Math.sin(p.frameCount * SPEED) * (Math.PI / 8));
    p.rect(-rectW / 2, -rectH / 2, rectW, rectH, 20);
    p.fill(200);
    p.text('O wO', 0, 0);
    // p.text('Download Resume', 0, 0);

    const legLength = 50;
    const feetLength = 10;
    p.push();
    p.strokeWeight(4);
    p.stroke(RECT_COLOR);
    p.translate(-rectW / 2, 0);
    p.rotate(p.frameCount * SPEED);
    p.line(0, 0, 0, legLength);
    p.line(0, legLength, feetLength, legLength);
    p.pop();

    p.push();
    p.strokeWeight(4);
    p.stroke(RECT_COLOR);
    p.translate(rectW / 2, 0);
    p.rotate(p.frameCount * SPEED + Math.PI);
    p.line(0, 0, 0, legLength);
    p.line(0, legLength, feetLength, legLength);
    p.pop();

    p.pop();
  };
};
/* eslint-enable no-param-reassign */

export default sketch;
