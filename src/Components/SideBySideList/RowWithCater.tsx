
import ColourWithImage from './ColourWithImage'
import {
    Collapse,
    createStyles,
    Divider,
    IconButton,
    TableCell,
    TableRow,
    withStyles
} from '@material-ui/core'


import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import { useState } from 'react';
// import { ColourList } from '../styles';
import { ComparisonElements, DEFAULT_MAX_WIDTH } from '.';
import React from 'react';
import ColoursAlike from './ColoursAlike';
import { ColourList } from '../styles';

const StyledTableRow = withStyles(() =>
    createStyles({
        root: {
            // backgroundColor: ColourList.colorPrimaryDark,
            // color: 'white',
            "&:hover": {
                backgroundColor: `${ColourList.colorPrimaryLightLight} !important`
            },
            '& > *': {
                borderBottom: 'unset',
            },
        },
    }),
)(TableRow);
const StyledTableCell = withStyles(() =>
    createStyles({
        root: {
            padding: '10px',
            // backgroundColor: ColourList.colorPrimaryDark
        },
    }),
)(TableCell);


interface Props {
    index: number
    entry: ComparisonElements

    elementALabel: string
    elementBLabel: string

    elementAColourListMap: Map<string, string>
    elementBColourListMap: Map<string, string>

    elementAImages: Map<string, string>
    elementBImages: Map<string, string>

    elementAToBMap: Map<string, string[]>
    elementBToAMap: Map<string, string[]>
}

const RowWithCaret = ({
    index,
    entry,
    elementAColourListMap,
    elementALabel,
    elementAImages,
    elementBColourListMap,
    elementBLabel,
    elementBImages,
    elementAToBMap,
    elementBToAMap
}: Props) => {

    const [openLeft, setOpenLeft] = useState(false)
    const [openRight, setOpenRight] = useState(false)

    return (
        <React.Fragment>
            <StyledTableRow style={{ width: DEFAULT_MAX_WIDTH }} hover key={index}>
                <StyledTableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => {
                        setOpenLeft(!openLeft)
                    }
                    }>
                        {openLeft ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell key={index.toString() + 'A'}>
                    <ColourWithImage
                        count={index}
                        backgroundColour={
                            elementAColourListMap.get(entry.elementA) ?? 'none'
                        }
                        label={elementALabel}
                        colourName={entry.elementA}
                        file={elementAImages.get(entry.elementA.toLowerCase())}
                    />
                </StyledTableCell>
                <StyledTableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => {
                        setOpenRight(!openRight)
                    }
                    }>
                        {openRight ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell key={index.toString() + 'B'}>
                    <ColourWithImage
                        count={index}
                        backgroundColour={
                            elementBColourListMap.get(entry.elementB) ?? 'none'
                        }
                        label={elementBLabel}
                        colourName={entry.elementB}
                        file={elementBImages.get(entry.elementB.toLowerCase())}
                    />
                </StyledTableCell>
            </StyledTableRow>
            <TableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse key={index.toString() + "left"} in={openLeft} timeout="auto" unmountOnExit>
                        <ColoursAlike
                            elementImagesList={elementAImages}
                            open={openLeft}
                            elementLabel={elementALabel}
                            counterpartLabel={elementBLabel}
                            colourName={entry.elementA}
                            elementAToBMap={elementAToBMap}
                        />
                    </Collapse>
                    {openLeft && openRight && (<Divider />)}

                    <Collapse key={index.toString() + "right"} in={openRight} timeout="auto" unmountOnExit>
                        <ColoursAlike
                            elementImagesList={elementBImages}
                            open={openRight}
                            elementLabel={elementBLabel}
                            counterpartLabel={elementALabel}
                            colourName={entry.elementB}
                            elementAToBMap={elementBToAMap}
                        />

                    </Collapse>
                </StyledTableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default RowWithCaret