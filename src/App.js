import { useState } from 'react';
import './App.css';
import 'web-components-review-module-table'
import 'web-components-review-module-loremipsum'

function App() {
  const [childModule, setChildModule] = useState(null);
  const [childWidth, setChildWidth] = useState('');
  const [textAlign, setTextAlign] = useState('');
  const [forceFail, setForceFail] = useState(false);

  return (
    <div className="App">
      <h1>Container project</h1>

      <h2>Children attributes</h2>
      
      <section>
        <div>
          Width:
          <input
            onChange={(event) => setChildWidth(event.target.value)}
            value={childWidth}
          />
          %
        </div>
        <div>
          Text align:
          <select
            onChange={(event) => setTextAlign(event.target.value)}
            value={textAlign}
          >
            <option value="center">Center</option>
            <option value="justify">Justify</option>
            <option value="left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>
        <div>
          Force fail:
          <button
            onClick={() => setForceFail(true)}
          >
            Fail
          </button>
        </div>
      </section>

      <h2>Select any module from the menu</h2>
      <ul>
        <li><a href="#" onClick={() => setChildModule('module1')}>HTML Table example</a></li>
        <li><a href="#" onClick={() => setChildModule('module2')}>Lorem Impsum example</a></li>
      </ul>

      <div>
        {childModule === 'module1' ? (
          <table-module width={childWidth} />
        ) : null}

        {childModule === 'module2' ? (
          <lorem-ipsum-module
            width={childWidth}
            text-align={textAlign}
            force-fail={forceFail}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
