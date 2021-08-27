
import { FiberManualRecord } from '@material-ui/icons'
import { threadsToHex } from '../../__fixtures__/threadsToHex'

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
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span style={{ textAlign: 'center' }}>{`${colourName}`}</span>

      <FiberManualRecord
        fontSize="small"
        style={{
          color: newBack ?? backgroundColour ?? 'none'
        }}
      />
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
