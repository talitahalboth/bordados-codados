import { isNumeric } from '.'
import type { AnchorAndDmcType } from '../typings'
import { anchorToDmc1 } from '../__fixtures__/anchorToDmc1'
import { anchorToDmc2 } from '../__fixtures__/anchorToDmc2'
import { anchorToDmc3 } from '../__fixtures__/anchorToDmc3'
import { anchorToDmc4 } from '../__fixtures__/anchorToDmc4'
import { anchorToDmcColours } from '../__fixtures__/anchorToDmcColours'
import { getAnchorList } from './anchorList'
import { getDmcList } from './dmcList'

export const getAnchorAndDmcList = () => {
  const anchorList = getAnchorList()
  const dmcList = getDmcList()

  const usedAnchor = new Map<string, boolean>()
  const usedDmc = new Map<string, boolean>()

  const anchorAndDmc = new Set<string>()

  anchorToDmc1.forEach((obj) => {
    usedAnchor.set(obj.anchor, true)
    usedDmc.set(obj.dmc, true)
    anchorAndDmc.add(JSON.stringify({ anchor: obj.anchor, dmc: obj.dmc }))
  })
  anchorToDmc2.forEach((obj) => {
    usedAnchor.set(obj.anchor, true)
    usedDmc.set(obj.dmc, true)
    anchorAndDmc.add(JSON.stringify({ anchor: obj.anchor, dmc: obj.dmc }))
  })

  anchorToDmc3.forEach((obj) => {
    usedAnchor.set(obj.anchor, true)
    usedDmc.set(obj.dmc, true)
    anchorAndDmc.add(JSON.stringify({ anchor: obj.anchor, dmc: obj.dmc }))
  })

  anchorToDmc4.forEach((obj) => {
    usedAnchor.set(obj.anchor, true)
    usedDmc.set(obj.dmc, true)
    anchorAndDmc.add(JSON.stringify({ anchor: obj.anchor, dmc: obj.dmc }))
  })

  anchorToDmcColours.forEach((obj) => {
    usedAnchor.set(obj.anchor, true)
    usedDmc.set(obj.dmc, true)
    anchorAndDmc.add(JSON.stringify({ anchor: obj.anchor, dmc: obj.dmc }))
  })

  anchorList.forEach((anchor) => {
    if (!usedAnchor.get(anchor))
      anchorAndDmc.add(JSON.stringify({ anchor, dmc: 'N/A' }))
  })

  dmcList.forEach((dmc) => {
    if (!usedAnchor.get(dmc))
      anchorAndDmc.add(JSON.stringify({ anchor: 'N/A', dmc }))
  })

  const anchorAndDmcArray = [...anchorAndDmc.values()]
  const anchorAndDmcComplete = anchorAndDmcArray.map(
    (value): AnchorAndDmcType => JSON.parse(value)
  )

  const sorted = anchorAndDmcComplete.sort((a, b) => {
    if (isNumeric(a.anchor[0]) && isNumeric(b.anchor[0])) {
      if (a.anchor.length === b.anchor.length)
        return a.anchor.localeCompare(b.anchor)

      return a.anchor.length < b.anchor.length ? -1 : 1
    }

    if (isNumeric(a.anchor[0])) return -1
    if (isNumeric(b.anchor[0])) return 1

    return a.anchor.localeCompare(b.anchor)
  })

  return sorted
}
