import { getAnchorAndCirculoList } from "../utils/anchorAndCirculo"
import { getAnchorColourList } from "../utils/anchorColour"



const AnchorToCirculo = () => {


    const sorted = getAnchorAndCirculoList()
    const anchorColourList = getAnchorColourList()

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {
                return (
                    <div key={index}>
                        <div style={{ backgroundColor: anchorColourList.get(entry.anchor ?? "white") }}>
                            {"Anchor: " + entry.anchor}
                        </div>
                        <div>
                            {"Circulo: " + entry.circulo}
                        </div>
                    </div>
                )

            })
        }
    </div>)

}

export default AnchorToCirculo