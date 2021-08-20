// import { anchorToCirculo } from "../__fixtures__/anchorToCirculo"
// import { anchorToDmcColours } from "../__fixtures__/anchorToDmcColours"
import { circuloToDmc } from "../__fixtures__/circuloToDmc"
import { dmcColours } from "../__fixtures__/dmcColours"

const CirculoToDmc = () => {
    const circuloToDmcMap = new Map<string, Set<string>>()
    // anchorColourList.forEach(anchorColour =>
    //     anchorToCirculoMap.set(anchorColour, new Set<string>()))

    circuloToDmc.forEach(circuloDmcObl => {
        if (!circuloToDmcMap.get(circuloDmcObl.dmc)) {
            circuloToDmcMap.set(circuloDmcObl.dmc, new Set<string>())
        }
        const newSet = circuloToDmcMap.get(circuloDmcObl.dmc)
        newSet?.add(circuloDmcObl.circulo)
        if (newSet)
            circuloToDmcMap.set(circuloDmcObl.dmc, newSet)
    })

    const DmcColoursMap = new Map<string, string>()

    dmcColours.forEach(dmcObj => {
        DmcColoursMap.set(dmcObj.dmc, dmcObj.hex)

    })

    const circuloToDmcEntries = [...circuloToDmcMap.entries()]
    const sorted = circuloToDmcEntries.sort((a, b) => {
        if (a[0].length === b[0].length) return a[0].localeCompare(b[0])
        return a[0].length < b[0].length ? -1 : 1
    })

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {
                const setArray = [...entry[1]]
                return (
                    <div key={index}>
                        <div style={{ backgroundColor: DmcColoursMap.get(entry[0] ?? "white") }}>
                            {"DMC: " + entry[0]}
                        </div>
                        <div>
                            {"Circulo: " + setArray}
                        </div>
                    </div>
                )

            })
        }
    </div>)

}

export default CirculoToDmc