import { TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import { ComparisonElements, DEFAULT_MAX_WIDTH, Order } from ".";


interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ComparisonElements) => void;
    order: Order;
    orderBy: string;
    headerA: string
    headerB: string
}

const EnhancedTableHead = ({ headerA, headerB, order, orderBy, onRequestSort }: EnhancedTableProps) => {
    const createSortHandler = (property: keyof ComparisonElements) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    }
    return (
        <TableHead>
            <TableRow style={{ width: DEFAULT_MAX_WIDTH }}>
                <TableCell
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
                </TableCell>
                <TableCell
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
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead