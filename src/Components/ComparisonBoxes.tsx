// import type { Theme } from '@material-ui/core/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AnchorToCirculo from './AnchorToCirculo'
import CirculoToDmc from './CirculoToDmc'
import AnchorToDmc from './AnchorToDmc'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
)

const ComparisonBoxes = () => {
  const classes = useStyles()

  return (
    <div style={{ padding: "10px" }} >
      <Grid container className={classes.root} spacing={3}>
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
