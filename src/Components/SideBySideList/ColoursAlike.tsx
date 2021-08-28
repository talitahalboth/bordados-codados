import { createStyles, List, ListItem, Tooltip, Typography, withStyles } from "@material-ui/core"
import { FiberManualRecord } from "@material-ui/icons";
import { colourDistance, hexToRgb } from "../../utils/colourUtils"
import { threadsToHex } from "../../__fixtures__/threadsToHex"
import { ColourList } from "../styles";
// import { ColourList } from "../styles";

interface Props {
    elementLabel: string
    open: boolean
    colourName: string
    elementImagesList: Map<string, string>

}

const TextOnlyTooltip = withStyles({
    tooltip: {
        color: "black",
        backgroundColor: "transparent"
    }
})(Tooltip);

const StyledListItem = withStyles(() =>
    createStyles({
        root: {
            // backgroundColor: ColourList.colorPrimaryDark,
            "&:hover": {
                backgroundColor: `${ColourList.colorPrimaryLightLight} !important`
            },
        },
    }),
)(ListItem);

const getActualColourCode = (originalColourCode: string): string => {
    const colourCode = Number.parseInt(originalColourCode)

    if (isNaN(colourCode)) return originalColourCode.toLowerCase()
    return colourCode.toString()

}

const getActualColourName = (name: string) => {
    const nameParts = name.split('-')
    const threadSystem = nameParts[0]
    return `${threadSystem}-${getActualColourCode(nameParts[1])}`
}

const ColoursAlike = ({ elementLabel, colourName, elementImagesList }: Props) => {

    const HexColour = threadsToHex.find(
        (element) =>
            getActualColourName(element.colourName) ===
            `${elementLabel.toLowerCase()}-${colourName.toLowerCase()}`
    )?.hexCode
    const closeToAColours = HexColour ? threadsToHex.filter(
        (element) =>
            HexColour !== element.hexCode &&
            element.colourName.includes(elementLabel.toLowerCase())
    ).sort((a, b) =>
        colourDistance(hexToRgb(HexColour), hexToRgb(a.hexCode)) <
            colourDistance(hexToRgb(HexColour), hexToRgb(b.hexCode))
            ? -1 : 1).slice(0, 5) : []


    return (
        <div>
            <Typography style={{
                // color: ColourList.colorPrimaryLightLight,
            }} variant="h6">
                {`${elementLabel} variants`}
            </Typography>
            <List dense>
                {
                    closeToAColours.map((hex, index) => {
                        return (
                            <TextOnlyTooltip
                                enterTouchDelay={100}
                                leaveTouchDelay={500}
                                key={`coloursAlike-${index.toString()}`}
                                style={{ backgroundColor: "none" }}
                                title={
                                    <>
                                        {elementImagesList.get(getActualColourCode(hex.colourName.split('-')[1])) && (
                                            <img
                                                id={`${elementLabel}-${colourName}`}
                                                style={{ maxHeight: '50px', maxWidth: '50px' }}
                                                alt="threadPicture"
                                                src={elementImagesList.get(getActualColourCode(hex.colourName.split('-')[1]))}
                                            />)}
                                    </>
                                }>
                                <StyledListItem button>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            // color: ColourList.colorPrimaryLightLight,
                                        }}
                                    >
                                        <FiberManualRecord
                                            fontSize="small"
                                            style={{
                                                color: hex.hexCode ?? 'none'
                                            }}
                                        />
                                        {getActualColourCode(hex.colourName.split('-')[1])}

                                    </div>

                                </StyledListItem>
                            </TextOnlyTooltip>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default ColoursAlike