// import { getAverageRGB } from "../../utils/imageColour"

import { threadsToHex } from "../../__fixtures__/threadsToHex";


interface Props {
    file?: string
    label: string
    colourName: string
    backgroundColour: string
    count: number
}


const ColourWithImage = ({ file, label, colourName, backgroundColour }: Props) => {

    const newBack = threadsToHex.find(element => element.colourName === `${label.toLowerCase()}-${colourName.toLowerCase()}`)?.hexCode

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: "space-between",
            width: '100%',
            alignItems: "center",
        }}>
            <div style={{
                display: 'flex',
                backgroundColor: newBack ?? backgroundColour,
                width: "100%",
                height: "50px",
                justifyContent: 'center',
                alignItems: "center"
            }}>

                <span>{`${label} ${colourName}`}</span>
            </div>
            {file && <img id={`${label}-${colourName}`} style={{ maxHeight: "50px", maxWidth: "50px" }} alt="threadPicture" src={file} />}
        </div>
    )

}

export default ColourWithImage