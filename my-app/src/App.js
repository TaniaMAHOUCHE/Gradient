import './App.css';
import { useState} from 'react';


function App() {
  const [colors, setColors] = useState(['#ff0000','#0000ff']);
  const [degrees, setDegrees] = useState(0);
  const [gradientString, setGradientString] = useState('');



  const makeGradientString = () => {
    const colorString = colors.reduce((acc, currentValue) => {
      return `${acc}, ${currentValue}`
    });
    return `linear-gradient(${degrees}deg, ${colorString}) `
  };

  const inputChangeHandler = () => event => {
    setColors(
      colors.map((color, index) => index === 1 ? event.target.
      value: color
    )
    );
    setGradientString(makeGradientString());
  }

  //const gradientString = makeGradientString(colors, degrees);

  return (
    <>
      {colors.map((color, i) =>(
        <div>
          <input
            type="color"
            name={`color-${i}`}
            value={`${color}`}
            // input={inputChangeHandler(i)}
          />
          <label htmlFor={`color-${i}`}>{`color-${i}`}</label>
        </div>
      ))}
      <div>
          <input
            type="number"
            name="degrees"
            value={degrees}
            onChange={event => { setDegrees(event.target.value)}}
            min={0}
            max={360}
          />
          <label htmlFor='degrees'>Degrees</label>
      </div>
      <div
          className="display-box"
          style={{
            background:makeGradientString()
          }}
      ></div>
      <div>{gradientString}</div>     
    </>
  );
}

export default App;
