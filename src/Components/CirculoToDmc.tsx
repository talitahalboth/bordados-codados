
import { getCirculoAndDMcList } from "../utils/circuloAndDmc"
import { getDmcColourList } from "../utils/dmcColour"

const CirculoToDmc = () => {
    const sorted = getCirculoAndDMcList()
    const dmcColourList = getDmcColourList()

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {
                return (
                    <div key={index}>
                        <div>
                            {"Circulo: " + entry.circulo}
                        </div>
                        <div style={{ backgroundColor: dmcColourList.get(entry.dmc ?? "white") }}>
                            {"DMC: " + entry.dmc}
                        </div>
                    </div>
                )

            })
        }
    </div>)

}

export default CirculoToDmc