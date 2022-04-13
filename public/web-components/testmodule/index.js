(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      
    </style>

    <div id='module-content'>
      <h1>This module has failed</h1>

      <p>Fail ...</p>

      

    </div>
  `;

  class failModule extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        // open: Elements of the shadow root are accessible from JavaScript outside the root, for example using Element.shadowRoot:
        // closed: Denies access to the node(s) of a closed shadow root from JavaScript outside it
        mode: 'open'
      });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // Force constructor fail
      const fail = null;
      fail.test();
    }
    
    // Attributes to watch
    static get observedAttributes() {
      return ['width', 'text-align', 'force-fail'];
    }
    
    // Lifecycle
    // When the component is connected
    connectedCallback() {
      console.log('Test module element added to page.');
    }
    // When any of observed attributes has changed
    attributeChangedCallback(name, oldValue, newValue) {
      // if (name == 'force-fail') {
      //   if(newValue) {
      //     const fail = null;
      //     fail.test();
      //   }
      // }
      if (name == 'width'){
        this.shadowRoot.querySelector('#module-content').style.width = `${newValue}%`;
      }
      if (name == 'text-align'){
        this.shadowRoot.querySelector('#module-content').style.textAlign = newValue;
      }
    }
  
    // When the component is removed
    disconnectedCallback() {
      console.log('Test module element removed from page.');
    }
  }

  window.customElements.define('fail-module', failModule);
})();