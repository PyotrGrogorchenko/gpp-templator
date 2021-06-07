# gpp-templator - templator with TypeScript

> Per aspera ad astra

[![Build Status](https://travis-ci.org/janl/mustache.js.svg?branch=master)](https://travis-ci.org/janl/mustache.js)

## Install

You can get Mustache via [npm](https://www.npmjs.com/package/gpp-templator).

```bash
$ npm i gpp-templator
```

## Usage

Below is a quick example how to use gpp-templator:

```typescript
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