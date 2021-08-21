// import { getAverageRGB } from "../../utils/imageColour"

import { threadsToHex } from '../../__fixtures__/threadsToHex'
import Circle from '../Circle'

interface Props {
  file?: string
  label: string
  colourName: string
  backgroundColour: string
  count: number
}

const ColourWithImage = ({
  file,
  label,
  colourName,
  backgroundColour,
}: Props) => {
  const newBack = threadsToHex.find(
    (element) =>
      element.colourName ===
      `${label.toLowerCase()}-${colourName.toLowerCase()}`
  )?.hexCode

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>{`${label} ${colourName}`}</span>
        <Circle
          bgColor={newBack ?? backgroundColour ?? 'white'}
          csx={{
            height: '10px',
            width: '10px',
            padding: '0px',
            margin: '0px 0px 0px 5px',
          }}
        />
      </div>
      {file && (
        <img
          id={`${label}-${colourName}`}
          style={{ maxHeight: '50px', maxWidth: '50px' }}
          alt="threadPicture"
          src={file}
        />
      )}
    </div>
  )
}

export default ColourWithImage
