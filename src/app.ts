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
      grid-template-columns: repeat(auto-fit, minmax(308px, 308px));
      gap: 2rem;
      justify-content: space-around;
    }
  `

  render() {
    return html`<div class="grid-container">
      <grid-block text="one"></grid-block>
      <grid-block text="two"></grid-block>
      <grid-block text="three"></grid-block>
      <grid-block text="four"></grid-block>
      <grid-block text="five"></grid-block>
      <grid-block text="six"></grid-block>
      <grid-block text="seven"></grid-block>
      <grid-block text="eight"></grid-block>
      <grid-block text="nine"></grid-block>
      <grid-block text="ten"></grid-block>
      <grid-block text="eleven"></grid-block>
      <grid-block text="twelve"></grid-block>
    </div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-app': GridAppElement
  }
}

export default GridAppElement
