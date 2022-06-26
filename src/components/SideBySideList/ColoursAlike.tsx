import { List, Typography } from "@material-ui/core"
import { colourDistance, hexToRgb } from "../../utils/colourUtils"
import { threadsToHex } from "../../__fixtures__/threadsToHex"
import ColoursAlikeComponent from "./ColoursAlikeComponent";

interface Props {
    elementLabel: string
    counterpartLabel: string
    open: boolean
    colourName: string
    elementImagesList: Map<string, string>

    elementAToBMap: Map<string, string[]>


}


export const getActualColourCode = (originalColourCode: string): string => {
    const colourCode = Number.parseInt(originalColourCode)

    if (isNaN(colourCode)) return originalColourCode.toLowerCase()
    return colourCode.toString()

}

export const getActualColourName = (name: string) => {
    const nameParts = name.split('-')
    const threadSystem = nameParts[0]
    return `${threadSystem}-${getActualColourCode(nameParts[1])}`
}

export interface NameAndCode {
    colourName: string;
    hexCode: string;
}

const ColoursAlike = ({ elementLabel, colourName, elementImagesList, elementAToBMap, counterpartLabel }: Props) => {
    console.log(elementAToBMap)

    const HexColour = threadsToHex.find(
        (element) =>
            getActualColourName(element.colourName) ===
            `${elementLabel.toLowerCase()}-${colourName.toLowerCase()}`
    )?.hexCode
    const closeToAColours: NameAndCode[] = HexColour ? threadsToHex.filter(
        (element) =>
            HexColour !== element.hexCode &&
            element.colourName.includes(elementLabel.toLowerCase())
    ).sort((a, b) =>
        colourDistance(hexToRgb(HexColour), hexToRgb(a.hexCode)) <
            colourDistance(hexToRgb(HexColour), hexToRgb(b.hexCode))
            ? -1 : 1).slice(0, 5) : []



    return (
        <div>
            <Typography variant="h6">
                {`${elementLabel} variants`}
            </Typography>
            <List dense>
                {
                    closeToAColours.map((hex, index) => {
                        return (
                            <ColoursAlikeComponent
                                counterpartLabel={counterpartLabel}
                                index={index}
                                hex={hex}
                                elementLabel={elementLabel}
                                colourName={colourName}
                                elementImagesList={elementImagesList}
                                elementAToBMap={elementAToBMap}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default ColoursAlike