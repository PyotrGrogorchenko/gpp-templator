import { selectRootComponent, setRootComponent } from '../store'

export const renderApp = (Component: any) => {
  const root: HTMLElement | null = document.querySelector('.app')
  if (!root) throw new Error('Element with class="app" not found')
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  const app = new Component()
  const RootComponent = selectRootComponent()
  setRootComponent(app)
  if (RootComponent) {
    RootComponent.componentWillUnmount()
    RootComponent.unmount()
    RootComponent.componentDidUnmount()
  }
  app.init(root)
}
