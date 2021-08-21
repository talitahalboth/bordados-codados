import ColourWithImage from './ColourWithImage'
import { colourMappingCHildStyle, colourMappingStyle } from '../styles'

export interface ComparisonElements {
  elementA: string
  elementB: string
}

interface Props {
  elementALabel: string
  elementBLabel: string

  sortedElementList: ComparisonElements[]

  elementAColourListMap: Map<string, string>
  elementBColourListMap: Map<string, string>

  elementAImages: Map<string, string>
  elementBImages: Map<string, string>
}

const SideBySideList = ({
  elementALabel,
  elementBLabel,
  sortedElementList,
  elementAColourListMap,
  elementBColourListMap,
  elementAImages,
  elementBImages,
}: Props) => {
  return (
    <div style={colourMappingStyle}>
      {sortedElementList.map((entry, index) => {
        return (
          <div style={colourMappingCHildStyle} key={index}>
            <ColourWithImage
              count={index}
              backgroundColour={
                elementAColourListMap.get(entry.elementA) ?? 'white'
              }
              label={elementALabel}
              colourName={entry.elementA}
              file={elementAImages.get(entry.elementA.toLowerCase())}
            />

            <ColourWithImage
              count={index}
              backgroundColour={
                elementBColourListMap.get(entry.elementB) ?? 'white'
              }
              label={elementBLabel}
              colourName={entry.elementB}
              file={elementBImages.get(entry.elementB.toLowerCase())}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SideBySideList
