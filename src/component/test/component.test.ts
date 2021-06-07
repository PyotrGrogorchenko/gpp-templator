import 'regenerator-runtime/runtime'
import { TestElements } from './example/TestElements.gpp'
import { getRoot, writeResult } from './utils'

test('Component => TestElements', async () => {
  const root = getRoot()
  const app = new TestElements()
  app.init(root)
  writeResult('testElements.html', 'template.html', root.innerHTML)
  expect(root.innerHTML).toMatchSnapshot()
})
