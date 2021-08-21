import { getAnchorAndCirculoList } from "../utils/anchorAndCirculo"
import { getAnchorColourList } from "../utils/anchorColour"
import { anchorImages } from "../__fixtures__/coresAnchor"
import { circuloImages } from "../__fixtures__/coresCirculo"
import ColourWithImage from "./ColourWithImage"

import { colourMappingCHildStyle, colourMappingStyle } from "./styles"

const AnchorToCirculo = () => {


    const sorted = getAnchorAndCirculoList()
    const anchorColourList = getAnchorColourList()

    const mapAnchor = anchorImages()
    const mapCirculo = circuloImages()

    return (<div style={colourMappingStyle}  >
        {
            sorted.map((entry, index) => {
                return (
                    <div style={colourMappingCHildStyle} key={index}>
                        <ColourWithImage
                            count={index}
                            backgroundColour={anchorColourList.get(entry.anchor) ?? "white"}
                            label="Anchor"
                            colourName={entry.anchor}
                            file={mapAnchor.get(entry.anchor.toLowerCase())} />
                        <ColourWithImage
                            count={index}
                            backgroundColour={"white"}
                            label="Circulo"
                            colourName={entry.circulo}
                            file={mapCirculo.get(entry.circulo.toLowerCase())} />
                    </div>
                )

            })
        }
    </div>)

}

export default AnchorToCirculo