import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './components/GridBlock'

@customElement('grid-app')
class GridAppElement extends LitElement {
  static styles = css`
    .grid-container {
      border: 3px solid black;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 100px 100px;
      gap: 2rem;
    }
  `

  render() {
    return html`<div class="grid-container">
      <grid-block text="one"></grid-block>
      <grid-block text="two"></grid-block>
      <grid-block text="three"></grid-block>
      <grid-block text="four"></grid-block>
      <grid-block text="five"></grid-block>
    </div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-app': GridAppElement
  }
}

export default GridAppElement
