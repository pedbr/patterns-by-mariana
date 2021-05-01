import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  text: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: 'rgb(251, 239, 219)',
    color: 'rgb(53, 56, 37)',
    fontSize: 92,
    fontFamily: 'Rubik',
  },
}))

const Work = () => {
  const classes = useStyles()
  return <div className={classes.text}>WORK</div>
}

export default Work
