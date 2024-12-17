// src/components/Tables/VehicleDetailsTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const VehicleDetailsTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>VIN</TableCell>
          <TableCell>Make</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Model Year</TableCell>
          <TableCell>City</TableCell>
          <TableCell>State</TableCell>
          <TableCell>Range (mi)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((vehicle) => (
          <TableRow key={vehicle["DOL Vehicle ID"]}>
            <TableCell>{vehicle["VIN (1-10)"]}</TableCell>
            <TableCell>{vehicle.Make}</TableCell>
            <TableCell>{vehicle.Model}</TableCell>
            <TableCell>{vehicle["Model Year"]}</TableCell>
            <TableCell>{vehicle.City}</TableCell>
            <TableCell>{vehicle.State}</TableCell>
            <TableCell>{vehicle["Electric Range"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default VehicleDetailsTable;