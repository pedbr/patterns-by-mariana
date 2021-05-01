import { home, work, shop, about } from './paths'
import Home from '../components/Home'
import Work from '../components/Work'
import Shop from '../components/Shop'
import About from '../components/About'

export const Routes = [
  {
    name: 'home',
    path: home,
    exact: true,
    component: Home,
  },
  {
    name: 'work',
    path: work,
    exact: true,
    component: Work,
  },
  {
    name: 'shop',
    path: shop,
    exact: true,
    component: Shop,
  },
  {
    name: 'about',
    path: about,
    exact: true,
    component: About,
  },
]
