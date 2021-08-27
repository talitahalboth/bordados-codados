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

        root: {
            padding: '10px'
        },
        head: {
            backgroundColor: ColourList.colorPrimaryLightLight,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell)

const ELEMENT_A_ORDER_KEY = "elementA"
const ELEMENT_B_ORDER_KEY = "elementB"

const EnhancedTableHead = ({ headerA, headerB, order, orderBy, onRequestSort }: EnhancedTableProps) => {
    const createSortHandler = (property: keyof ComparisonElements) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    }
    return (
        <TableHead>
            <TableRow style={{ maxWidth: DEFAULT_MAX_WIDTH }}>
                <StyledTableCell />
                <StyledTableCell
                    key={headerA}
                    sortDirection={orderBy === ELEMENT_A_ORDER_KEY ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === ELEMENT_A_ORDER_KEY}
                        direction={orderBy === ELEMENT_A_ORDER_KEY ? order : 'asc'}
                        onClick={createSortHandler(ELEMENT_A_ORDER_KEY)}
                    >
                        {headerA}
                    </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell />
                <StyledTableCell
                    key={headerB}
                    sortDirection={orderBy === ELEMENT_B_ORDER_KEY ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === ELEMENT_B_ORDER_KEY}
                        direction={orderBy === ELEMENT_B_ORDER_KEY ? order : 'asc'}
                        onClick={createSortHandler(ELEMENT_B_ORDER_KEY)}
                    >
                        {headerB}
                    </TableSortLabel>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead