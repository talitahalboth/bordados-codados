
import { getCirculoAndDMcList } from "../utils/circuloAndDmc"
import { getDmcColourList } from "../utils/dmcColour"
import { circuloImages } from "../__fixtures__/coresCirculo"
import { dmcImages } from "../__fixtures__/coresDmc"
import ColourWithImage from "./ColourWithImage"
import { colourMappingCHildStyle, colourMappingStyle } from "./styles"

const CirculoToDmc = () => {
    const sorted = getCirculoAndDMcList()
    const dmcColourList = getDmcColourList()


    const mapDmc = dmcImages()
    const mapCirculo = circuloImages()


    return (<div style={colourMappingStyle}  >
        {
            sorted.map((entry, index) => {
                return (
                    <div style={colourMappingCHildStyle} key={index}>
                        <ColourWithImage
                            count={index}
                            backgroundColour={dmcColourList.get(entry.dmc) ?? "white"}
                            label="DMC"
                            colourName={entry.dmc}
                            file={mapDmc.get(entry.dmc.toLowerCase())} />

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

export default CirculoToDmc