import ColourWithImage from './ColourWithImage'
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@material-ui/core';

import { useState } from 'react';
import EnhancedTableHead from './EnhancedTableHead';
import {
  descendingComparator,
  getComparator, stableSort
} from './helperFunctions';

export interface ComparisonElements {
  elementA: string
  elementB: string
}

interface Props {
  elementALabel: string
  elementBLabel: string

  sortedElementList: ComparisonElements[]

  elementAColourListMap: Map<string, string>
  elementBColourListMap: Map<string, string>

  elementAImages: Map<string, string>
  elementBImages: Map<string, string>
}

export const DEFAULT_MAX_WIDTH = 450


const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    maxWidth: DEFAULT_MAX_WIDTH,
  },
  container: {
    maxHeight: 600,
  },
})

export type Order = 'asc' | 'desc'



const SideBySideList = ({
  elementALabel,
  elementBLabel,
  sortedElementList,
  elementAColourListMap,
  elementBColourListMap,
  elementAImages,
  elementBImages,
}: Props) => {

  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [orderBy, setOrderBy] = useState<keyof ComparisonElements>('elementA')
  const [order, setOrder] = useState<Order>('desc')



  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(sortedElementList.sort((a, b) => descendingComparator(a, b, "elementB")))
  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: keyof ComparisonElements) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label={`${elementALabel}-${elementBLabel}`}>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headerA={elementALabel}
            headerB={elementBLabel}
          ></EnhancedTableHead>
          <TableBody>
            {stableSort(sortedElementList, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((entry, index) => {
              return (
                <TableRow style={{ width: DEFAULT_MAX_WIDTH }} hover key={index}>
                  <TableCell key={index.toString() + 'A'}>
                    <ColourWithImage
                      count={index}
                      backgroundColour={
                        elementAColourListMap.get(entry.elementA) ?? 'none'
                      }
                      label={elementALabel}
                      colourName={entry.elementA}
                      file={elementAImages.get(entry.elementA.toLowerCase())}
                    />
                  </TableCell>
                  <TableCell key={index.toString() + 'B'}>
                    <ColourWithImage
                      count={index}
                      backgroundColour={
                        elementBColourListMap.get(entry.elementB) ?? 'none'
                      }
                      label={elementBLabel}
                      colourName={entry.elementB}
                      file={elementBImages.get(entry.elementB.toLowerCase())}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ width: DEFAULT_MAX_WIDTH }}
        rowsPerPageOptions={[50, 100, 500]}
        component="div"
        count={sortedElementList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default SideBySideList
