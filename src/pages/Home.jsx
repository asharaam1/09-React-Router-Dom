import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        We specialize in building modern web applications using the latest technologies like React.js and Material UI.
      </Typography>

    </Container>
  );
};

export default Home;
