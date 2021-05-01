import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ThemeConfig from './theme'
import Images from './assets/images'

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
  text: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: 'rgb(251, 239, 219)',
    color: 'rgb(53, 56, 37)',
    fontSize: 92,
    fontFamily: 'Rubik',
  },
  preText: {
    marginRight: theme.spacing(2),
    fontFamily: 'Rubik',
    fontSize: 36,
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <ThemeConfig>
      <div className={classes.app}>
        <div className={classes.preText}>PATTERNS BY</div>
        <div className={classes.text}>Mariana</div>
      </div>
    </ThemeConfig>
  )
}

export default App
