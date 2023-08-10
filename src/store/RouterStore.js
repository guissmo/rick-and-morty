import { createBrowserHistory } from 'history'
import { RouterStore } from '@superwf/mobx-react-router'

const browserHistory = createBrowserHistory({ basename: '/rick-and-morty' })
const routerStore = new RouterStore(browserHistory)
export default routerStore
