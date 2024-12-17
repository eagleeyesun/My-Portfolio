import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const VINSearch = ({ data }) => {
  const [searchVin, setSearchVin] = useState('');

  const filteredData = data.filter(vehicle => vehicle["VIN (1-10)"].includes(searchVin));

  return (
    <Box my={4}>
      <TextField
        label="Search by VIN"
        variant="outlined"
        fullWidth
        value={searchVin}
        onChange={(e) => setSearchVin(e.target.value)}
      />
      {filteredData.length > 0 ? (
        <Box mt={2}>
          <Typography variant="h6">Search Results</Typography>
          <ul>
            {filteredData.map(vehicle => (
              <li key={vehicle["DOL Vehicle ID"]}>{`${vehicle.Make} ${vehicle.Model} - ${vehicle["Model Year"]} (VIN: ${vehicle["VIN (1-10)"]})`}</li>
            ))}
          </ul>
        </Box>
      ) : (
        searchVin && <Typography>No results found for "{searchVin}".</Typography>
      )}
    </Box>
  );
};

export default VINSearch;