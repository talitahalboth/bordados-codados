import { Container, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { ANCHOR_TO_CIRCULO, ANCHOR_TO_DMC, CIRCULO_TO_DMC } from '../constants';
import AnchorToCirculo from './AnchorToCirculo';
import AnchorToDmc from './AnchorToDmc';
import CirculoToDmc from './CirculoToDmc';

import { selectNavigate } from './navigationSlice';

interface ContentSwitchProps {
    navigate: string
}

const ContentSwitch = ({ navigate }: ContentSwitchProps) => {
    switch (navigate) {
        case ANCHOR_TO_DMC:
            return <AnchorToDmc />
        case ANCHOR_TO_CIRCULO:
            return <AnchorToCirculo />
        case CIRCULO_TO_DMC:
            return <CirculoToDmc />

        default:
            return <div></div>;
    }

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            alignSelf: 'center',
        },
        margin: {
            width: '100%',
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
        },
    }),
);

const Content = () => {

    const navigate = useSelector(selectNavigate);
    const classes = useStyles()
    return (
        <Container maxWidth={"sm"} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px' }}>

                <TextField
                    variant="outlined"
                    label="Find a Colour"
                    id="standard-start-adornment"
                    className={classes.margin}
                />
            </div>
            <ContentSwitch navigate={navigate} />
        </Container>
    )
}

export default Content