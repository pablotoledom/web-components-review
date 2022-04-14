(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .form {
        margin-top: 20px;
      }
    </style>

    <h1>This a test module</h1>

    <div id='module-content'>
      <p>Paragraph ...</p>
      <div class='first-p'>First div ...</div>

      <div class='form'>
        <button id='manipulate-parent'>Manipulate parent</button>
      </div>
    </div>
  `;

  class testModule extends HTMLElement {
    constructor() {
      super();
      this._root = this.attachShadow({
        // open: Elements of the shadow root are accessible from JavaScript outside the root, for example using Element.shadowRoot:
        // closed: Denies access to the node(s) of a closed shadow root from JavaScript outside it
        mode: 'closed'
      });
    }
    
    // Attributes to watch
    static get observedAttributes() {
      return ['width', 'text-align', 'force-fail', 'manipulate'];
    }

    // Manipulate parent accross query selector
    manipulateParent() {
      document.querySelector('.parent-menu').style.background = "red";
    }
    
    // Lifecycle
    // When the component is connected
    connectedCallback() {
      console.log('Test module element added to page.');
      this._root.appendChild(template.content.cloneNode(true));

      // Add listener to sense click
      this.addEventListener("click", this.manipulateParent);
    }
    // When any of observed attributes has changed
    attributeChangedCallback(name, oldValue, newValue) {
      if (name == 'force-fail'){
        const $myWebComponent = document.querySelector("fail-module");

        if ($myWebComponent) {
          const moduleContent = $myWebComponent._root.querySelector(".first-p");

          if(moduleContent) {
            moduleContent.innerText = "¡Modificado!";
          }
        }
      }

      if (name == 'width'){
        const moduleContent = this._root.querySelector('#module-content');
        if(moduleContent) {
          moduleContent.style.width = `${newValue}%`;
        }
      }

      if (name == 'text-align'){
        const moduleContent = this._root.querySelector('#module-content');
        if(moduleContent) {
          moduleContent.style.textAlign = newValue;
        }
      }

      if (name === 'manipulate'){
        if (newValue === 'true') {
          this._root.querySelector('p').innerHTML = "<h1>Child manipulated from parent, across attributes</h1>";
        }
      }
    }
  
    // When the component is removed
    disconnectedCallback() {
      console.log('Test module element removed from page.');
    }
  }

  window.customElements.define('test-module', testModule);
})();