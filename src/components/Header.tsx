import { AppBar, createStyles, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, Toolbar, Typography, withStyles } from "@material-ui/core"
import { ColourList } from "./styles"
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { navigateToPage, selectNavigate } from "./navigationSlice"
import { ANCHOR_TO_CIRCULO, ANCHOR_TO_DMC, CIRCULO_TO_DMC } from "../constants"
import { CompareArrows } from "@material-ui/icons"

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

        },

        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    }),
)


const StyledListItem = withStyles(() =>
    createStyles({
        root: {
            "&:hover": {
                backgroundColor: `${ColourList.colorPrimaryLightLight} !important`
            },
        },
    }),
)(ListItem);



const Header = () => {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setDrawerOpen(open)
    }

    const dispatch = useDispatch();

    const navigationOpions = [
        { name: ANCHOR_TO_DMC, label: "Anchor to DMC" },
        { name: ANCHOR_TO_CIRCULO, label: "Anchor to Circulo" },
        { name: CIRCULO_TO_DMC, label: "Circulo to DMC" }
    ]

    const navigate = useSelector(selectNavigate)
    const title = navigationOpions.find((option) => option.name === navigate)

    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={classes.appBar}>
                <IconButton onClick={() => { setDrawerOpen((prev) => !prev) }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {title?.label ?? "Hello :)"}
                </Typography>
            </Toolbar>
            <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >

                    <List>
                        {navigationOpions.map((option) => (
                            <StyledListItem button onClick={() =>
                                dispatch(navigateToPage(option.name))
                            } key={option.name}>
                                <ListItemIcon><CompareArrows /></ListItemIcon>
                                <ListItemText primary={option.label} />
                            </StyledListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </AppBar>
    )

}

export default Header