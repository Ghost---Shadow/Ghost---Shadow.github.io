import { DIRECTION_RIGHT } from './constants';

const RECT_COLOR = 30;

class Rect {
  constructor({
    p,
    speed,
    legLength,
    feetLength,
    width,
    height,
    x,
    y,
  }) {
    this.p = p;
    this.speed = speed;
    this.legLength = legLength;
    this.feetLength = feetLength;
    this.direction = DIRECTION_RIGHT;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  draw() {
    const {
      p, width, height, speed, x, y,
    } = this;
    p.fill(RECT_COLOR);
    p.noStroke();

    p.push();
    p.translate(x + width / 2, y + height / 2);
    p.rotate(Math.sin(p.frameCount * speed) * (Math.PI / 8));
    this.drawBody();
    this.drawFace();
    this.drawFeet();
    p.pop();
  }

  drawBody() {
    const { p, width, height } = this;
    p.rect(-width / 2, -height / 2, width, height, 20);
  }

  drawFace() {
    const { p } = this;
    const face = this.direction === DIRECTION_RIGHT ? 'Ow O' : 'O wO';
    p.fill(200);
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(face, 0, 0);
  }

  drawFeet() {
    const {
      p, width, speed, legLength, feetLength,
    } = this;

    p.strokeWeight(4);
    p.stroke(RECT_COLOR);

    // Left leg
    p.push();
    p.translate(-width / 2, 0);
    p.rotate(p.frameCount * speed);
    p.line(0, 0, 0, legLength);
    p.line(0, legLength, feetLength, legLength);
    p.pop();

    // Right leg
    p.push();
    p.translate(width / 2, 0);
    p.rotate(p.frameCount * speed + Math.PI);
    p.line(0, 0, 0, legLength);
    p.line(0, legLength, feetLength, legLength);
    p.pop();
  }
}

export default Rect;
