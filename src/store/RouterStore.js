import { createBrowserHistory } from 'history'
import { RouterStore } from '@superwf/mobx-react-router'

const browserHistory = createBrowserHistory()
const routerStore = new RouterStore(browserHistory)
export default routerStore
