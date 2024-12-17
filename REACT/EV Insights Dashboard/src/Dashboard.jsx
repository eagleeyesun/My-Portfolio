import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import MakeModelChart from './Charts/MakeModelChart';
import RangeDistributionChart from './Charts/RangeDistributionChart';

import VehicleDetailsTable from './Tables/VehicleDetailsTable';
import vehicleData from './VehicleData';
import VINSearch from './VinSearch'

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(vehicleData); // Directly set data from the imported file
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        EV Insights Dashboard
      </Typography>
      <VINSearch data={data} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MakeModelChart data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <RangeDistributionChart data={data} />
        </Grid>
        <Grid item xs={12}>
          <VehicleDetailsTable data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;