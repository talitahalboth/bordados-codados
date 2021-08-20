import { anchorToDmc1 } from "../__fixtures__/anchorToDmc1"
import { anchorToDmc2 } from "../__fixtures__/anchorToDmc2"
import { anchorToDmc3 } from "../__fixtures__/anchorToDmc3"
import { anchorToDmc4 } from "../__fixtures__/anchorToDmc4"
import { anchorToDmcColours } from "../__fixtures__/anchorToDmcColours"
import { anchorToCirculo } from "../__fixtures__/anchorToCirculo"

export const getAnchorList = () => {

    const anchorList = new Set<string>()
    anchorToDmc1.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })
    anchorToDmc2.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })

    anchorToDmc3.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })

    anchorToDmc4.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })


    anchorToDmcColours.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })
    anchorToCirculo.forEach(anchor => {
        anchorList.add(anchor.anchor)
    })

    const anchorToDmcEntries = [...anchorList]
    return anchorToDmcEntries

}
