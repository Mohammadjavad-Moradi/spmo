import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, machineHead, ink1, ink2, feeder1, feeder2) {
  return { name, machineHead, ink1, ink2, feeder1, feeder2 };
}

const rows = [
  createData(170, 'Machine Head', 'Ink man 1', 'Ink man 2', 'Feeder man', 'feeder man 2'),
  createData(171, 'Machine Head', 'Ink man 1', 'Ink man 2', 'Feeder man', 'feeder man 2'),
  createData(172, 'Machine Head', 'Ink man 1', 'Ink man 2', 'Feeder man', 'feeder man 2'),
  createData(173, 'Machine Head', 'Ink man 1', 'Ink man 2', 'Feeder man', 'feeder man 2'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>شماره قفسه</TableCell>
            <TableCell align="right">مسئول ماشین</TableCell>
            <TableCell align="right">مسئول مرکب</TableCell>
            <TableCell align="right">مسئول مرکب</TableCell>
            <TableCell align="right">مسئول آپارات</TableCell>
            <TableCell align="right">کمک آپارات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.machineHead}</TableCell>
              <TableCell align="right">{row.ink1}</TableCell>
              <TableCell align="right">{row.ink2}</TableCell>
              <TableCell align="right">{row.feeder1}</TableCell>
              <TableCell align="right">{row.feeder2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
