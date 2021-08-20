import { anchorToDmc1 } from "../__fixtures__/anchorToDmc1"
import { anchorToDmc2 } from "../__fixtures__/anchorToDmc2"
import { anchorToDmc3 } from "../__fixtures__/anchorToDmc3"
import { anchorToDmc4 } from "../__fixtures__/anchorToDmc4"
import { anchorToDmcColours } from "../__fixtures__/anchorToDmcColours"
import { circuloToDmc } from "../__fixtures__/circuloToDmc"
import { dmcColours } from "../__fixtures__/dmcColours"
import { dmcColours2 } from "../__fixtures__/dmcColours2"

export const getDmcList = () => {

    const dmcList = new Set<string>()
    anchorToDmc1.forEach(obj => {
        dmcList.add(obj.dmc)
    })
    anchorToDmc2.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    anchorToDmc3.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    anchorToDmc4.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    anchorToDmcColours.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    circuloToDmc.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    dmcColours.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    dmcColours2.forEach(obj => {
        dmcList.add(obj.dmc)
    })

    const dmcEntries = [...dmcList]
    return dmcEntries

}
