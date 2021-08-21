import { getAnchorAndCirculoList } from '../utils/anchorAndCirculo'
import { getAnchorColourList } from '../utils/anchorColour'
import { anchorImages } from '../__fixtures__/coresAnchor'
import { circuloImages } from '../__fixtures__/coresCirculo'
import type { ComparisonElements } from './SideBySideList'
import SideBySideList from './SideBySideList'

const AnchorToCirculo = () => {
  const sorted = getAnchorAndCirculoList()
    .filter((element) => element.anchor !== 'N/A' && element.circulo !== 'N/A')
    .map((element): ComparisonElements => {
      return {
        elementA: element.anchor,
        elementB: element.circulo,
      }
    })

  const anchorColourList = getAnchorColourList()

  const mapAnchor = anchorImages()
  const mapCirculo = circuloImages()

  return (
    <SideBySideList
      sortedElementList={sorted}
      elementAColourListMap={anchorColourList}
      elementBColourListMap={new Map<string, string>()}
      elementAImages={mapAnchor}
      elementBImages={mapCirculo}
      elementALabel="Anchor"
      elementBLabel="Circulo"
    />
  )
}

export default AnchorToCirculo
