# gpp-templator - templator with TypeScript

[![Build Status](https://img.shields.io/badge/build-passing-green)](https://www.npmjs.com/package/gpp-templator)

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" width=20 height=20 alt="JavaScript"/>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width=20 height=20 alt="TypeScript"/>  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width=20 height=20 alt="HTML 5"/><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" width=20 height=20 alt="CSS"/> <img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" width=26 height=20 alt="docker"/> <img src="https://github.com/webpack/media/blob/master/logo/icon-square-big.svg" width=20 height=20 alt="webpack"/>

gpp-templator is a TypeScript library for building user interfaces.

* **Declarative:** gpp makes it painless to create interactive UIs. Design simple views for each state in your application, and gpp will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.

## Install

> node 14.x

```bash
$ npm i gpp-templator
```

## Usage

[You can quick start here](https://github.com/PyotrGrogorchenko/gpp-templator-quick-start)

For ease of use, use [gpp-loader](https://www.npmjs.com/package/gpp-loader) for [webpack](https://github.com/webpack/webpack).
Below is a quick example how to use gpp-templator:

```html
// file: index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick example</title>
</head>
<body>
  <div class='app'></div>
</body>
</html>
```

```typescript
// file: ./Page/Page.gpp.ts

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
// file: ./Button/Button.gpp.ts

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
