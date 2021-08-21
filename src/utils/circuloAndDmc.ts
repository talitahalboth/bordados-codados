import { isNumeric } from '.'
import type { DmcAndCirculoType } from '../typings'
import { getDmcList } from './dmcList'
import { getCirculoList } from './circuloList'
import { circuloToDmc } from '../__fixtures__/circuloToDmc'

export const getCirculoAndDMcList = () => {
  const dmcList = getDmcList()
  const circuloList = getCirculoList()

  const usedDmc = new Map<string, boolean>()
  const usedCirculo = new Map<string, boolean>()

  const dmcAndCirculo = new Set<string>()

  circuloToDmc.forEach((obj) => {
    usedDmc.set(obj.dmc, true)
    usedCirculo.set(obj.circulo, true)
    dmcAndCirculo.add(JSON.stringify({ circulo: obj.circulo, dmc: obj.dmc }))
  })

  dmcList.forEach((dmc) => {
    if (!usedDmc.get(dmc))
      dmcAndCirculo.add(JSON.stringify({ circulo: 'N/A', dmc }))
  })

  circuloList.forEach((circulo) => {
    if (!usedDmc.get(circulo))
      dmcAndCirculo.add(JSON.stringify({ circulo, dmc: 'N/A' }))
  })

  const dmcAndCirculoArray = [...dmcAndCirculo.values()]
  const dmcAndCirculoComplete = dmcAndCirculoArray.map(
    (value): DmcAndCirculoType => JSON.parse(value)
  )

  const sorted = dmcAndCirculoComplete.sort((a, b) => {
    if (isNumeric(a.circulo[0]) && isNumeric(b.circulo[0])) {
      if (a.circulo.length === b.circulo.length)
        return a.circulo.localeCompare(b.circulo)

      return a.circulo.length < b.circulo.length ? -1 : 1
    }

    if (isNumeric(a.circulo[0])) return -1
    if (isNumeric(b.circulo[0])) return 1

    return a.circulo.localeCompare(b.circulo)
  })

  return sorted
}
