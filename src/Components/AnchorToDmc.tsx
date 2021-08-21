import { getAnchorAndDmcList } from "../utils/anchorAndDmc"
import { getAnchorColourList } from "../utils/anchorColour"
import { getDmcColourList } from "../utils/dmcColour"
import ColourWithImage from "./ColourWithImage"

import { anchorImages } from "../__fixtures__/coresAnchor"
import { dmcImages } from "../__fixtures__/coresDmc"
import { colourMappingCHildStyle, colourMappingStyle } from "./styles"

const AnchorToDmc = () => {


    const sorted = getAnchorAndDmcList()
    const dmcColourList = getDmcColourList()
    const anchorColourList = getAnchorColourList()


    const mapAnchor = anchorImages()
    const mapDmc = dmcImages()

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
                            backgroundColour={dmcColourList.get(entry.dmc) ?? "white"}
                            label="DMC"
                            colourName={entry.dmc}
                            file={mapDmc.get(entry.dmc.toLowerCase())} />

                    </div>
                )

            })
        }
    </div>)
}

export default AnchorToDmc