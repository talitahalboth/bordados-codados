import { ComparisonElements, Order } from ".";
import { isNumeric } from "../../utils";

export const descendingComparator = (a: ComparisonElements, b: ComparisonElements, orderBy: keyof ComparisonElements) => {
    if (isNumeric(a[orderBy][0]) && isNumeric(b[orderBy][0])) {
        if (a[orderBy].length === b[orderBy].length) return a[orderBy].localeCompare(b[orderBy])
        return a[orderBy].length < b[orderBy].length ? -1 : 1
    }
    if (isNumeric(a[orderBy][0])) return -1;
    if (isNumeric(b[orderBy][0])) return 1;
    return a[orderBy].localeCompare(b[orderBy])
}


export function getComparator<Key extends keyof ComparisonElements>(
    order: Order,
    orderBy: Key,
): (a: ComparisonElements, b: ComparisonElements) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}