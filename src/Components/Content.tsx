import { Container } from '@material-ui/core';
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

const Content = () => {

    const navigate = useSelector(selectNavigate)
    return (
        <Container maxWidth={"sm"} style={{ display: 'flex', flexDirection: 'column' }}>
            <ContentSwitch navigate={navigate} />
        </Container>
    )
}

export default Content