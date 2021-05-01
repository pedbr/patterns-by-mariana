import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ThemeConfig from './theme'
import Button from '@material-ui/core/Button'
import { Route, Router, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Routes } from './constants/routes'
import { home, work, shop, about } from './constants/paths'

const history = createBrowserHistory()

interface RouteType {
  path: string
  exact: boolean
  name: string
  component: React.ComponentType<any>
}

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ed0da054399387.595a448cd7ead.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    fontFamily: 'Rubik',
    marginRight: theme.spacing(6),
    textDecoration: 'none',
  },
  logo: {
    marginLeft: theme.spacing(4),
    fontFamily: 'Rubik',
    backgroundColor: 'rgb(53, 56, 37)',
    color: 'rgb(251, 239, 219)',
    fontSize: 24,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  link: {
    textDecoration: 'none',
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <Router history={history}>
      <ThemeConfig>
        <div className={classes.app}>
          <div className={classes.navbar}>
            <Link className={classes.link} to={home}>
              <div className={classes.logo}>M</div>
            </Link>
            <div>
              <Link className={classes.link} to={work}>
                <Button className={classes.button}>WORK</Button>
              </Link>
              <Link className={classes.link} to={shop}>
                <Button className={classes.button}>SHOP</Button>
              </Link>
              <Link className={classes.link} to={about}>
                <Button className={classes.button}>ABOUT</Button>
              </Link>
            </div>
          </div>
          <Switch>
            {Routes.map((route: RouteType) => {
              const Component = route.component
              return (
                <Route
                  exact={route.exact}
                  key={route.name}
                  path={route.path}
                  render={(props): JSX.Element => <Component {...props} />}
                />
              )
            })}
          </Switch>
        </div>
      </ThemeConfig>
    </Router>
  )
}

export default App
