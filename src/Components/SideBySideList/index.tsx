import ColourWithImage from './ColourWithImage'
import {
  createStyles,
  makeStyles,
  // Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  withStyles
} from '@material-ui/core';

import { useState } from 'react';
import EnhancedTableHead from './EnhancedTableHead';
import {
  getComparator, stableSort
} from './helperFunctions';
import { ColourList } from '../styles';
// import { ColourList } from '../styles';

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
    border: "2px",
    maxHeight: 600,
  },
  cell: {
    hover: {
      "&$hover:hover": {
        backgroundColor: '#blue !important',
      },
    },

  },
})

export type Order = 'asc' | 'desc'

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      "&:hover": {
        backgroundColor: `${ColourList.colorPrimaryLightLight} !important`
      }
    },
  }),
)(TableRow);


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
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [orderBy, setOrderBy] = useState<keyof ComparisonElements>('elementA')
  const [order, setOrder] = useState<Order>('desc')



  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: keyof ComparisonElements) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }


  return (
    <div style={{
      padding: '10px',
    }}>
      {/* <Paper className={classes.root}> */}
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
                <StyledTableRow style={{ width: DEFAULT_MAX_WIDTH }} hover key={index}>
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
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ maxWidth: DEFAULT_MAX_WIDTH, backgroundColor: ColourList.colorPrimaryLightLight }}
        rowsPerPageOptions={[10, 50, 100, 500]}
        component="div"
        count={sortedElementList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* </Paper> */}

    </div>
  )
}

export default SideBySideList
