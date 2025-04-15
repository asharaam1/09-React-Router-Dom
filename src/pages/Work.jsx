import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Work = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Work
      </Typography>
      <Typography variant="body1" paragraph>
        Here's a showcase of some of the recent projects we’ve worked on. We take pride in building high-quality web
        applications tailored to our clients’ needs.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">E-Commerce Dashboard</Typography>
              <Typography variant="body2" color="text.secondary">
                A responsive admin dashboard with real-time analytics and inventory tracking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Portfolio Website</Typography>
              <Typography variant="body2" color="text.secondary">
                A clean and modern portfolio website for showcasing creative work and attracting clients.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Work;
