import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import { ColourList } from "./styles"
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: ColourList.colorPrimaryDark,

        }
    }),
);

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={classes.appBar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {"Something will go here eventually"}
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header