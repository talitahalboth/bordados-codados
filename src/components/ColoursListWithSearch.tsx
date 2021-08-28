import {
    ListSubheader,
    makeStyles,
    TextField,
    TextFieldProps,
    useMediaQuery,
    useTheme
} from '@material-ui/core'
import { FiberManualRecord } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useState, useEffect } from "react";
import SideBySideList, { ComparisonElements } from "./SideBySideList";
import { VariableSizeList, ListChildComponentProps } from 'react-window';


const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    return React.cloneElement(data[index], {
        style: {
            ...style,
            top: (style.top as number) + LISTBOX_PADDING,
        },
    });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
    const ref = React.useRef<VariableSizeList>(null);
    React.useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactNode) => {
        if (React.isValidElement(child) && child.type === ListSubheader) {
            return 48;
        }

        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemSize={(index) => getChildSize(itemData[index])}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});

interface Props {
    elementALabel: string
    elementBLabel: string

    sortedElementList: ComparisonElements[]

    elementAColourListMap: Map<string, string>
    elementBColourListMap: Map<string, string>

    elementAImages: Map<string, string>
    elementBImages: Map<string, string>
}

const useStyles = makeStyles({
    listbox: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});


interface LabelAndColour {
    label: string
    colour: string
    elementA?: string
    elementB?: string
}

const ColourListWithSearch = ({
    elementALabel,
    elementBLabel,
    sortedElementList,
    elementAColourListMap,
    elementBColourListMap,
    elementAImages,
    elementBImages,
}: Props) => {
    const [value, setValue] = useState<LabelAndColour | null>(null);
    const [filteredColoursList, setFilteredColoursList] = useState(sortedElementList)
    const classes = useStyles()


    useEffect(() => {
        if (value !== null) {
            if (value.elementA)
                setFilteredColoursList(sortedElementList.filter((element) => element.elementA === value.elementA))
            else
                setFilteredColoursList(sortedElementList.filter((element) => element.elementB === value.elementB))
        }
        else {
            setFilteredColoursList(sortedElementList)
        }
    }, [value, sortedElementList])



    const elementASearchList = new Set<string>()
    const elementBSearchList = new Set<string>()

    const elementAToBMap = new Map<string, string[]>()
    const elementBToAMap = new Map<string, string[]>()

    sortedElementList.forEach((element) => {
        elementASearchList.add(element.elementA)
        elementBSearchList.add(element.elementB)
        const listA = elementAToBMap.get(element.elementA)
        if (!listA)
            elementAToBMap.set(element.elementA, [element.elementB])
        else {
            elementAToBMap.set(element.elementA, [...listA, element.elementB])
        }

        const listB = elementBToAMap.get(element.elementB)
        if (!listB)
            elementBToAMap.set(element.elementB, [element.elementA])
        else {
            elementBToAMap.set(element.elementB, [...listB, element.elementA])
        }

    })


    const options: LabelAndColour[] = []

    elementASearchList.forEach((elementAObj) => {
        options.push({
            label: `${elementALabel} ${elementAObj}`,
            colour: elementAColourListMap.get(elementAObj) ?? 'none',
            elementA: elementAObj
        })
    })
    elementBSearchList.forEach((elementBObj) => {
        options.push({
            label: `${elementBLabel} ${elementBObj}`,
            colour: elementBColourListMap.get(elementBObj) ?? 'none',
            elementB: elementBObj
        })
    })


    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px', alignSelf: 'center' }}>

                <Autocomplete
                    id={elementALabel + elementBLabel}
                    style={{ width: 300 }}
                    disableListWrap
                    value={value}
                    onChange={(_event: any, newValue: LabelAndColour | null) => {
                        setValue(newValue);
                    }}
                    getOptionSelected={
                        (option: LabelAndColour, value: LabelAndColour) =>
                            option.elementA === value.elementA &&
                            option.elementB === value.elementB
                    }
                    ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
                    classes={classes}
                    options={options}
                    getOptionLabel={(item: LabelAndColour) => item.label}
                    renderOption={(option) => (
                        <React.Fragment>
                            {option.label}
                            {option.colour !== 'none' &&
                                <FiberManualRecord
                                    fontSize="small"
                                    style={{
                                        color: option.colour
                                    }}
                                />
                            }
                        </React.Fragment>
                    )}
                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField  {...params} label="Search a Colour" variant="outlined" />}
                />
            </div>

            <SideBySideList
                elementAToBMap={elementAToBMap}
                elementBToAMap={elementBToAMap}
                sortedElementList={filteredColoursList}
                elementAColourListMap={elementAColourListMap}
                elementBColourListMap={elementBColourListMap}
                elementAImages={elementAImages}
                elementBImages={elementBImages}
                elementALabel={elementALabel}
                elementBLabel={elementBLabel}
            />
        </div>
    )
}

export default ColourListWithSearch