import p5 from 'p5';
import component from './Draw.html';

function sketch(p) {
  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(0, 0, 0);
  };

  p.draw = () => {
    p.fill(255);
    p.rect(10, 10, 80, 80);
  };
}

new p5(sketch, component);

export default component;
