import { anchorToDmc1 } from "../__fixtures__/anchorToDmc1"
import { anchorToDmc2 } from "../__fixtures__/anchorToDmc2"
import { anchorToDmc3 } from "../__fixtures__/anchorToDmc3"
import { anchorToDmc4 } from "../__fixtures__/anchorToDmc4"
import { anchorToDmcColours } from "../__fixtures__/anchorToDmcColours"
import { dmcColours } from "../__fixtures__/dmcColours"

interface Props {
    anchorColourList: string[]
}

const AnchorToDmc = ({ anchorColourList }: Props) => {

    const anchorToDmc = new Map<string, Set<string>>()
    anchorColourList.forEach(anchorColour =>
        anchorToDmc.set(anchorColour, new Set<string>()))


    anchorToDmc1.forEach(anchor => {
        if (!anchorToDmc.get(anchor.anchor)) {
            anchorToDmc.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToDmc.get(anchor.anchor)
        newSet?.add(anchor.dmc)
        if (newSet)
            anchorToDmc.set(anchor.anchor, newSet)
    })
    anchorToDmc2.forEach(anchor => {
        if (!anchorToDmc.get(anchor.anchor)) {
            anchorToDmc.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToDmc.get(anchor.anchor)
        newSet?.add(anchor.dmc)
        if (newSet)
            anchorToDmc.set(anchor.anchor, newSet)
    })

    anchorToDmc3.forEach(anchor => {
        if (!anchorToDmc.get(anchor.anchor)) {
            anchorToDmc.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToDmc.get(anchor.anchor)
        newSet?.add(anchor.dmc)
        if (newSet)
            anchorToDmc.set(anchor.anchor, newSet)
    })

    anchorToDmc4.forEach(anchor => {
        if (!anchorToDmc.get(anchor.anchor)) {
            anchorToDmc.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToDmc.get(anchor.anchor)
        newSet?.add(anchor.dmc)
        if (newSet)
            anchorToDmc.set(anchor.anchor, newSet)
    })

    const anchorToDmcColoursMap = new Map<string, string>()

    anchorToDmcColours.forEach(anchor => {
        if (!anchorToDmc.get(anchor.anchor)) {
            anchorToDmc.set(anchor.anchor, new Set<string>())
        }
        const newSet = anchorToDmc.get(anchor.anchor)
        newSet?.add(anchor.dmc)
        if (newSet)
            anchorToDmc.set(anchor.anchor, newSet)
        anchorToDmcColoursMap.set(anchor.anchor, anchor.hex)
    })

    const DmcColoursMap = new Map<string, string>()

    dmcColours.forEach(dmcObj => {
        DmcColoursMap.set(dmcObj.dmc, dmcObj.hex)

    })

    const anchorToDmcEntries = [...anchorToDmc.entries()]
    const sorted = anchorToDmcEntries.sort((a, b) => {
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
                        <div >
                            {"DMC: " + setArray}
                        </div>
                    </div>
                )

            })
        }
    </div>)
}

export default AnchorToDmc