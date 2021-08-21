
interface Props {
    file: string
    label: string
    colourName: string
    backgroundColour: string
    count: number
}

// const DEFAULT_IMG = '../__fixtures__/coresDmc/1.jpg'

const fs = require('fs');


const fileExists = (file: string) => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (err) {
        return false;
    }
}

const ColourWithImage = ({ count, file, label, colourName, backgroundColour }: Props) => {
    const logo = require('../__fixtures__/coresDmc/1.jpg')
    if (count < 10 && fileExists(file)) console.log(file)
    if (count < 10) console.log(file)
    // if (fileExists(DEFAULT_IMG)) console.log(DEFAULT_IMG)
    return (
        <div>
            <img alt="threadPicture" src={String(logo.default)} />
            <div style={{ backgroundColor: backgroundColour }}>
                {`${label} ${colourName}`}
            </div>
        </div>
    )

}

export default ColourWithImage