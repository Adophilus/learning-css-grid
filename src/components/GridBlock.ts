import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('grid-block')
class GridBlockElement extends LitElement {
  static styles = css`
    :host {
      border: 2px solid black;
    }

    :host {
      display: block;
      background-color: hsl(295, 42%, 26%);
      color: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  `

  @property()
  text = 'default'

  render() {
    return this.text
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-block': GridBlockElement
  }
}

export default GridBlockElement
