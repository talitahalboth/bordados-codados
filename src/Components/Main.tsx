import AnchorToCirculo from "./AnchorToCirculo"
import CirculoToDmc from "./CirculoToDmc"
import AnchorToDmc from "./AnchorToDmc"

const Main = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <AnchorToDmc />
            <AnchorToCirculo />
            <CirculoToDmc />
        </div>
    )
}

export default Main