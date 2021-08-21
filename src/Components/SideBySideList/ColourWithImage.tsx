
interface Props {
    file?: string
    label: string
    colourName: string
    backgroundColour: string
    count: number
}

// const DEFAULT_IMG = '../__fixtures__/coresDmc/1.jpg'

// const fs = require('fs');


// const fileExists = (file: string) => {
//     try {
//         require(file);
//         return true;
//     } catch (err) {
//         console.log(err)
//         return false;
//     }
// }


const ColourWithImage = ({ file, label, colourName, backgroundColour }: Props) => {
    // const logo = require('../__fixtures__/coresDmc/1.jpg')
    // console.log(anchorImages.anchor1001)
    // if (count < 10 && fileExists(file)) console.log(file)
    // if (count < 10) console.log(file)
    // if (fileExists(DEFAULT_IMG)) console.log(DEFAULT_IMG)

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
                backgroundColor: backgroundColour,
                width: "100%",
                height: "50px",
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <span>{`${label} ${colourName}`}</span>
            </div>
            {file && <img style={{ maxHeight: "50px", maxWidth: "50px" }} alt="threadPicture" src={file} />}
        </div>
    )

}

export default ColourWithImage