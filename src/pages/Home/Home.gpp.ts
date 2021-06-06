import { Component, renderApp } from '@Component'
import { TestComplex } from '@pages/TestComplex'
import { TestCycle } from '@pages/TestCycle'
import { TestIf } from '@pages/TestIf'
import { TestUI } from '@pages/TestUI'

export class Home extends Component {
  onTestUI = (e:Event) => {
    e.preventDefault()
    renderApp(TestUI)
  }

  onTestCycle = (e:Event) => {
    e.preventDefault()
    renderApp(TestCycle)
  }
  onTestIf = (e:Event) => {
    e.preventDefault()
    renderApp(TestIf)
  }
  onTestComplex = (e:Event) => {
    e.preventDefault()
    renderApp(TestComplex)
  }

  state = {
    onTestUI: this.onTestUI,
    onTestCycle: this.onTestCycle,
    onTestIf: this.onTestIf,
    onTestComplex: this.onTestComplex
  }

  template() {
    return (
      `<div className='flex-column'>
        <div>
          <Button 
            text='Test UI'
            id='button_test-ui'
            onClick={{state.onTestUI}}
          ></>
          <Button
            text='Test cycle'
            id='button_test-sycle'
            onClick={{state.onTestCycle}}
            style='secondary'
            margin='middle'
          ></>
          <Button
            text='Test if'
            id='button_test-if'
            onClick={{state.onTestIf}}
            style='link'
            margin='middle'
          ></>
          <Button
            text='Test complex'
            id='button_test-complex'
            onClick={{state.onTestComplex}}
            style='disabled'
            margin='middle'
          ></>
        </div>
      </div>`
    )
  }
}
