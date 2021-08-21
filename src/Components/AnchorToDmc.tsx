import { getAnchorAndDmcList } from "../utils/anchorAndDmc"
import { getAnchorColourList } from "../utils/anchorColour"
import { getDmcColourList } from "../utils/dmcColour"
import ColourWithImage from "./ColourWithImage"

const ANCHOR_COLOUR_LIST = '../__fixtures__/coresAnchor/'
// const DMC_COLOUR_LIST = '../__fixtures__/coresDmc/'
// const DEFAULT_IMG = '../__fixtures__/coresDmc/1.jpg'

// const fs = require('fs');


// const fileExists = (file: string) => {
//     try {
//         fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
//         return true;
//     } catch (err) {
//         return false;
//     }
// }

const AnchorToDmc = () => {


    const sorted = getAnchorAndDmcList()
    const dmcColourList = getDmcColourList()
    const anchorColourList = getAnchorColourList()
    // const logo = require('../__fixtures__/coresDmc/01.jpg')
    // console.log(logo)
    // const logo = require('../__fixtures__/coresDmc/1.jpg')
    // const imgs = sorted.map(({ anchor }) => {

    //     const anchorImgPath = ANCHOR_COLOUR_LIST + anchor + '.jpg'
    //     console.log(anchorImgPath)
    //     // const anchorImgExists = fileExists(anchorImgPath) // OUTPUTS: true or false
    //     // console.log(anchorImgPath, anchorImgExists)
    //     const anchorImg = require(DEFAULT_IMG)

    //     return anchorImg
    // })
    // const dmcImgPath = DMC_COLOUR_LIST + entry.dmc + 'jpg'


    // const dmcImgExists = fileExists(dmcImgPath) // OUTPUTS: true or false
    // const dmcImg = dmcImgExists ? require(DEFAULT_IMG) : require(DEFAULT_IMG)

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {

                // fileExists('your file name', (err, exists) => console.log(exists))
                return (
                    <div key={index}>
                        <ColourWithImage count={index} backgroundColour={anchorColourList.get(entry.anchor) ?? "white"} label="Anchor" colourName={entry.anchor} file={ANCHOR_COLOUR_LIST + entry.anchor + '.jpg'} />
                        {/* <img src={String(logo.default)} /> */}
                        <div style={{ backgroundColor: dmcColourList.get(entry.dmc ?? "white") }}>
                            {"DMC: " + entry.dmc}
                        </div>
                    </div>
                )

            })
        }
    </div>)
}

export default AnchorToDmc