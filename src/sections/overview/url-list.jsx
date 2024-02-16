import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import PropTypes from 'prop-types';
import * as React from 'react';


// ----------------------------------------------------------------------

function createData(urls, firstDetected, cacheRefreshed) {
  return {
    urls,
    firstDetected,
    cacheRefreshed,
  };
}




const rows = [
  createData('google.com.bd', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.in', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.pk', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.uk', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.ru', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.ag', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.ar', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.en', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
  createData('google.com.cd', 'Feb 12,2024, 10:56 AM', 'Feb 12,2024, 10:57 AM'),
];

const headCells = [
  {
    id: 'urls',
    numeric: false,
    disablePadding: false,
    label: 'Canonical URL (without Protocol)',
  },
  {
    id: 'firstDetected',
    numeric: false,
    disablePadding: false,
    label: 'First Detected',
  },
  {
    id: 'cacheRefreshed',
    numeric: false,
    disablePadding: false,
    label: 'Cache Refreshed',
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


// ----------------------------------------------------------------------

function EnhancedTableHead(props) {
   
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (


     <TableHead >
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>

  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

// ----------------------------------------------------------------------

export default function EnhancedTable() {
  const [under652, setUnder652] = React.useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('urls');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 652) {
        setUnder652(true);
      } else {
        setUnder652(false);
      }
    }

    // Call handleResize initially to set the initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%', boxShadow: '0 1.6rem 3rem #0000001a' }}>
      <Paper sx={{ width: '100%', p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: (under652 && 'column') || 'row',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Canonical URLs Detected
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Type full words to filter..."
            sx={{ mb: 2 }}
          />
        </Box>
        <TableContainer >
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead  order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {visibleRows.map((row, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.urls}
                  sx={{ cursor: 'pointer'}}
                >
                  <TableCell  component="th" scope="row" padding="5px">
                    {row.urls}
                  </TableCell>
                  <TableCell align="left">{row.firstDetected}</TableCell>
                  <TableCell align="left">{row.cacheRefreshed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: (under652 && 'column') || 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle2">
            Showing {page * rowsPerPage + 1} to{' '}
            {Math.min(page * rowsPerPage + rowsPerPage, rows.length)} of {rows.length} entries
          </Typography>

          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
        <Box />
      </Paper>
    </Box>
  );
}
