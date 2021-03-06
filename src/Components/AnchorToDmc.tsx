import { getAnchorAndDmcList } from '../utils/anchorAndDmc'
import { getAnchorColourList } from '../utils/anchorColour'
import { getDmcColourList } from '../utils/dmcColour'
import { anchorImages } from '../__fixtures__/coresAnchor'
import { dmcImages } from '../__fixtures__/coresDmc'
import ColourListWithSearch from './ColoursListWithSearch'
import type { ComparisonElements } from './SideBySideList'

const AnchorToDmc = () => {

  const sorted = getAnchorAndDmcList()
    .filter((element) => element.dmc !== 'N/A' && element.anchor !== 'N/A')
    .map((element): ComparisonElements => {
      return {
        elementA: element.anchor,
        elementB: element.dmc,
      }
    })


  const dmcColourList = getDmcColourList()
  const anchorColourList = getAnchorColourList()

  const mapAnchor = anchorImages()
  const mapDmc = dmcImages()



  return (
    <div>
      <ColourListWithSearch
        sortedElementList={sorted}
        elementAColourListMap={anchorColourList}
        elementBColourListMap={dmcColourList}
        elementAImages={mapAnchor}
        elementBImages={mapDmc}
        elementALabel="Anchor"
        elementBLabel="DMC"
      />
    </div>
  )
}

export default AnchorToDmc
