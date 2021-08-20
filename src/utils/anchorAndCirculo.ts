import { isNumeric } from "."
import { AnchorAndCirculoType } from "../typings"
import { anchorToCirculo } from "../__fixtures__/anchorToCirculo"
import { getAnchorList } from "./anchorList"
import { getCirculoList } from "./circuloList"


export const getAnchorAndCirculoList = () => {

    const anchorList = getAnchorList()
    const circuloList = getCirculoList()

    const usedAnchor = new Map<string, boolean>()
    const usedCirculo = new Map<string, boolean>()


    const anchorAndCirculo = new Set<string>()

    anchorToCirculo.forEach(obj => {
        usedAnchor.set(obj.anchor, true)
        usedCirculo.set(obj.circulo, true)
        anchorAndCirculo.add(JSON.stringify({ anchor: obj.anchor, circulo: obj.circulo }))
    })

    anchorList.forEach((anchor) => {
        if (!usedAnchor.get(anchor))
            anchorAndCirculo.add(JSON.stringify({ anchor: anchor, circulo: 'N/A' }))
    })


    circuloList.forEach((circulo) => {
        if (!usedAnchor.get(circulo))
            anchorAndCirculo.add(JSON.stringify({ anchor: 'N/A', circulo: circulo }))
    })

    const anchorAndCirculoArray = [...anchorAndCirculo.values()]
    const anchorAndCirculoComplete = anchorAndCirculoArray.map((value): AnchorAndCirculoType =>
        JSON.parse(value))

    const sorted = anchorAndCirculoComplete.sort((a, b) => {
        if (isNumeric(a.anchor[0]) && isNumeric(b.anchor[0])) {
            if (a.anchor.length === b.anchor.length) return a.anchor.localeCompare(b.anchor)
            return a.anchor.length < b.anchor.length ? -1 : 1
        }
        if (isNumeric(a.anchor[0])) return -1;
        if (isNumeric(b.anchor[0])) return 1;
        return a.anchor.localeCompare(b.anchor)
    })

    return sorted

}