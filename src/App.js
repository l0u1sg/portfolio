import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer>
          <p id="firstPage">Louis Gallet.</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} >
          <h2>Test</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
