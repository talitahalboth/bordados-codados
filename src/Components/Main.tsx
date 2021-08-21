import AnchorToCirculo from "./AnchorToCirculo"
import CirculoToDmc from "./CirculoToDmc"
import AnchorToDmc from "./AnchorToDmc"
import { anchorImages } from "../__fixtures__/coresAnchor"
import { getAverageRGB } from "../utils/imageColour"

const Main = () => {
    const file = anchorImages().get("1")
    if (file)
        console.log(getAverageRGB(file))
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <AnchorToDmc />
            <AnchorToCirculo />
            <CirculoToDmc />
        </div>
    )
}

export default Main