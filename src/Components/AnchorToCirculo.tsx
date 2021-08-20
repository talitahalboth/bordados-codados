import { anchorToCirculo } from "../__fixtures__/anchorToCirculo"
import { anchorToDmcColours } from "../__fixtures__/anchorToDmcColours"

interface Props {
    anchorColourList: string[]
}

const AnchorToCirculo = ({ anchorColourList }: Props) => {
    const anchorToCirculoMap = new Map<string, Set<string>>()
    anchorColourList.forEach(anchorColour =>
        anchorToCirculoMap.set(anchorColour, new Set<string>()))

    anchorToCirculo.forEach(anchor => {
        if (!anchorToCirculoMap.get(anchor.anchor)) {
            anchorToCirculoMap.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToCirculoMap.get(anchor.anchor)
        newSet?.add(anchor.circulo)
        if (newSet)
            anchorToCirculoMap.set(anchor.anchor, newSet)
    })


    const anchorToDmcColoursMap = new Map<string, string>()

    anchorToDmcColours.forEach(anchor => {
        anchorToDmcColoursMap.set(anchor.anchor, anchor.hex)
    })
    const anchorToCirculoEntries = [...anchorToCirculoMap.entries()]

    const sorted = anchorToCirculoEntries.sort((a, b) => {
        if (a[0].length === b[0].length) return a[0].localeCompare(b[0])
        return a[0].length < b[0].length ? -1 : 1
    })

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {
                const setArray = [...entry[1]]
                return (
                    <div key={index}>
                        <div style={{ backgroundColor: anchorToDmcColoursMap.get(entry[0] ?? "white") }}>
                            {"Anchor: " + entry[0]}
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

export default AnchorToCirculo