
import { circuloToDmc } from "../__fixtures__/circuloToDmc"
import { anchorToCirculo } from "../__fixtures__/anchorToCirculo"
export const getCirculoList = () => {

    const circuloList = new Set<string>()

    circuloToDmc.forEach(obj => {
        circuloList.add(obj.circulo)
    })

    anchorToCirculo.forEach(obj => {
        circuloList.add(obj.circulo)
    })

    const circuloEntries = [...circuloList]
    return circuloEntries

}
