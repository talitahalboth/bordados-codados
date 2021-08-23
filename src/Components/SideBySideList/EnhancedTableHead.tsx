import { createStyles, TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core";
import { ComparisonElements, DEFAULT_MAX_WIDTH, Order } from ".";
import { ColourList } from "../styles";


interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ComparisonElements) => void;
    order: Order;
    orderBy: string;
    headerA: string
    headerB: string
}

const StyledTableCell = withStyles(() =>
    createStyles({
        head: {
            backgroundColor: ColourList.colorPrimaryLightLight,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell)


// const StyledTableCell = withStyles(() =>
//     createStyles({
//         head: {
//             backgroundColor: ColourList.mutedDarkPurpleDark,
//             // color: 'white',
//         },
//         body: {
//             fontSize: 14,
//         },
//     }),
// )(TableCell);

// const StyledTableSortLabel = withStyles(() =>
//     createStyles({
//         root: {
//             color: ColourList.colorPrimary4,
//             "&:hover": {
//                 color: ColourList.colorPrimary4,
//             },
//             '&$active': {
//                 color: ColourList.colorPrimary4,
//             },
//         },
//         active: {},
//         icon: {
//             color: 'inherit !important'
//         },
//     })
// )(TableSortLabel);


const EnhancedTableHead = ({ headerA, headerB, order, orderBy, onRequestSort }: EnhancedTableProps) => {
    const createSortHandler = (property: keyof ComparisonElements) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    }
    return (
        <TableHead>
            <TableRow style={{ maxWidth: DEFAULT_MAX_WIDTH }}>
                <StyledTableCell
                    key={headerA}
                    sortDirection={orderBy === "elementA" ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === "elementA"}
                        direction={orderBy === "elementA" ? order : 'asc'}
                        onClick={createSortHandler("elementA")}
                    >
                        {headerA}
                    </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell
                    key={headerB}
                    sortDirection={orderBy === "elementB" ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === "elementB"}
                        direction={orderBy === "elementB" ? order : 'asc'}
                        onClick={createSortHandler("elementB")}
                    >
                        {headerB}
                    </TableSortLabel>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead