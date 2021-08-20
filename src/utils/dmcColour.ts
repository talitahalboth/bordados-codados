import { dmcColours } from "../__fixtures__/dmcColours"

export const getDmcColourList = () => {

    const DmcColoursMap = new Map<string, string>()

    dmcColours.forEach(dmcObj => {
        DmcColoursMap.set(dmcObj.dmc, dmcObj.hex)
    })
    return DmcColoursMap
}