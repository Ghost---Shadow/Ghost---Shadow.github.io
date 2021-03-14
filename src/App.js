import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './sketch';

const defaultWidth = 500;
const defaultHeight = 500;

function App() {
  return (
    <div>
      <P5Wrapper sketch={sketch} width={defaultWidth} height={defaultHeight} />
    </div>
  );
}

export default App;
