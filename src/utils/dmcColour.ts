import { dmcColours } from "../__fixtures__/dmcColours"
import { dmcColours2 } from "../__fixtures__/dmcColours2"

export const getDmcColourList = () => {

    const DmcColoursMap = new Map<string, string>()

    dmcColours2.forEach(dmcObj => {
        DmcColoursMap.set(dmcObj.dmc, dmcObj.hex)
    })

    dmcColours.forEach(dmcObj => {
        DmcColoursMap.set(dmcObj.dmc, dmcObj.hex)
    })

    return DmcColoursMap
}