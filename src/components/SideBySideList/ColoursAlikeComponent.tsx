import { Collapse, createStyles, ListItem, Tooltip, withStyles } from "@material-ui/core"
import { FiberManualRecord } from "@material-ui/icons"
import { ColourList } from "../styles"
import { getActualColourCode, NameAndCode } from "./ColoursAlike"

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useState } from "react"

interface Props {
    index: number,
    hex: NameAndCode
    elementLabel: string
    counterpartLabel: string
    colourName: string
    elementImagesList: Map<string, string>

    elementAToBMap: Map<string, string[]>
}


const TextOnlyTooltip = withStyles({
    tooltip: {
        color: "black",
        backgroundColor: "transparent"
    }
})(Tooltip)


const StyledListItem = withStyles(() =>
    createStyles({
        root: {
            // backgroundColor: ColourList.colorPrimaryDark,
            "&:hover": {
                backgroundColor: `${ColourList.colorPrimaryLightLight} !important`
            },
        },
    }),
)(ListItem)

const ColoursAlikeComponent = ({
    index,
    hex,
    elementLabel,
    colourName,
    elementImagesList,
    elementAToBMap,
    counterpartLabel
}: Props) => {


    const [open, setOpen] = useState(false)

    const counterParts = elementAToBMap.get(getActualColourCode(hex.colourName.split('-')[1]))

    return (
        <div>

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
                <StyledListItem button onClick={() => setOpen(!open)}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '40px' }}>
                    {counterParts && counterParts.map((colour, index) => {
                        return (
                            <div>
                                <StyledListItem button key={index}>
                                    <span>{counterpartLabel} {colour}</span>
                                </StyledListItem>
                            </div>
                        )
                    })}

                </div>
            </Collapse>
        </div>
    )
}

export default ColoursAlikeComponent