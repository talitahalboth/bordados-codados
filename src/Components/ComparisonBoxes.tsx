// import type { Theme } from '@material-ui/core/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AnchorToCirculo from './AnchorToCirculo'
import CirculoToDmc from './CirculoToDmc'
import AnchorToDmc from './AnchorToDmc'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const GRID_XS = 12

const ComparisonBoxes = () => {
  const classes = useStyles()

  return (
    <Grid item xs={GRID_XS}>
      <Grid container justifyContent="center" className={classes.root} xs={12}>
        <Grid item>
          <AnchorToDmc />
        </Grid>
        <Grid item>
          <AnchorToCirculo />
        </Grid>
        <Grid item>
          <CirculoToDmc />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ComparisonBoxes
