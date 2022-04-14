import { useState } from 'react';
import './App.css';
import 'web-components-review-module-table'
import 'web-components-review-module-loremipsum'

function App() {
  const [childModule, setChildModule] = useState(null);
  const [childWidth, setChildWidth] = useState('100');
  const [textAlign, setTextAlign] = useState('left');
  const [forceFailByAttr, setForceFailByAttr] = useState(false);
  const [manipulateChildByAttr, setManipulateChildByAttr] = useState(false);

  const resetForm = () => {
    setChildWidth('100');
    setTextAlign('left');
    setForceFailByAttr(false);
    setManipulateChildByAttr(false);
  };

  const manipulateChildFromParent = () => {
    const childWebComponent = document.querySelector("test-module");
    
    if (childWebComponent) {
      const moduleContent = childWebComponent._root.querySelector(".first-p");
      
      if(moduleContent) {
        moduleContent.innerHTML = "<h1>Child manipulated from parent directly</h1>";
      }
    }
  };

  return (
    <div className="App">
      <h1>Container project</h1>

      <h2>Children attributes</h2>
      
      <section className="form">
        <div className="form-container">
          <div className="form-option">
            Width (%):
            <input
              onChange={(event) => setChildWidth(event.target.value)}
              value={childWidth}
            />
          </div>
          <div className="form-option">
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
          <div className="form-option">
            Force fail by attribute:
            <button
              onClick={() => setForceFailByAttr()}
            >
              Fail Child
            </button>
          </div>
          <div className="form-option">
            Manipulate child by attribute:
            <button
              onClick={() => setManipulateChildByAttr(true)}
            >
              Test
            </button>
          </div>
          <div className="form-option">
            Manipulate child from parent:
            <button
              onClick={() => manipulateChildFromParent()}
            >
              Test
            </button>
          </div>
        </div>
      </section>

      <h2>Select any module from the menu</h2>
      <ul className="parent-menu">
        <li><a href="#" onClick={() => {resetForm(); setChildModule('module1')}}>Test module Example</a></li>
        <li><a href="#" onClick={() => {resetForm(); setChildModule('module2')}}>HTML Table example</a></li>
        <li><a href="#" onClick={() => {resetForm(); setChildModule('module3')}}>Lorem Impsum example</a></li>
      </ul>

      <div>
      {childModule === 'module1' ? (
          <test-module
            width={childWidth}
            text-align={textAlign}
            force-fail={forceFailByAttr}
            manipulate={manipulateChildByAttr}
          />
        ) : null}

        {childModule === 'module2' ? (
          <table-module width={childWidth} />
        ) : null}

        {childModule === 'module3' ? (
          <lorem-ipsum-module
            width={childWidth}
            text-align={textAlign}
            force-fail={forceFailByAttr}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
