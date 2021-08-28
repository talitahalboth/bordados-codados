import { getCirculoAndDMcList } from '../utils/circuloAndDmc'
import { getDmcColourList } from '../utils/dmcColour'
import { circuloImages } from '../__fixtures__/coresCirculo'
import { dmcImages } from '../__fixtures__/coresDmc'
import type { ComparisonElements } from './SideBySideList'
import ColoursListWithSearch from './ColoursListWithSearch'


const CirculoToDmc = () => {
  const sorted = getCirculoAndDMcList()
    .filter((element) => element.dmc !== 'N/A' && element.circulo !== 'N/A')
    .map((element): ComparisonElements => {
      return {
        elementA: element.dmc,
        elementB: element.circulo,
      }
    })

  const dmcColourList = getDmcColourList()

  const mapDmc = dmcImages()
  const mapCirculo = circuloImages()

  return (
    <ColoursListWithSearch
      sortedElementList={sorted}
      elementAColourListMap={dmcColourList}
      elementBColourListMap={new Map<string, string>()}
      elementAImages={mapDmc}
      elementBImages={mapCirculo}
      elementALabel="DMC"
      elementBLabel="Circulo"
    />
  )
}

export default CirculoToDmc
