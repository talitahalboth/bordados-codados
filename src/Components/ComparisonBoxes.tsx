import type { Theme } from '@material-ui/core/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AnchorToCirculo from './AnchorToCirculo'
import CirculoToDmc from './CirculoToDmc'
import AnchorToDmc from './AnchorToDmc'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
)

const ComparisonBoxes = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <AnchorToDmc />
        </Grid>
        <Grid item xs>
          <AnchorToCirculo />
        </Grid>
        <Grid item xs>
          <CirculoToDmc />
        </Grid>
      </Grid>
    </div>
  )
}

export default ComparisonBoxes
