# gpp-templator - templator with TypeScript

> Per aspera ad astra

[![Build Status](https://img.shields.io/badge/build-passing-green)](https://www.npmjs.com/package/gpp-templator)

## Install

> node 14.x | webpack 5.x | gpp-loader 1.x | gpp-templator 1.x

```bash
$ npm i gpp-templator
```

## Usage

For ease of use, use [gpp-templator](https://www.npmjs.com/package/gpp-templator) for [webpack](https://github.com/webpack/webpack).
Below is a quick example how to use gpp-templator:

```typescript
// file: Page.gpp.ts

import { Component } from 'gpp-templator'
import { Button } from '/home/project/src/components/Button/index.ts'

export class Page extends Component {

onClick = (e:Event) => {
  e.preventDefault()
  alert('On batton click!')
}

components() {
  return {
    Button
  }
}

state = {
  onClick: this.onClick
}

template() {
    return (
      `<div className='page'>
          <h1>Quick example</h1>
          <Button
            text='Button'
            id='button'
            onClick={{state.onClick}}
          ></Button>
        </div>
      </div>`
    )
  }
}
```

```typescript
// file: Button.gpp.ts

import { Component } from 'gpp-templator'

export class Button extends Component {

template() {
    return (
      `<button 
        className={{props.test}}
        id={{props.id}}
        onClick={{props.onClick}}
      ></>`
    )
  }
}
```
```typescript
// file: index.ts

import { renderApp } from 'gpp-templator'
import { Page } from './Page'

renderApp(Page)
```