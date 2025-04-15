import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '3rem' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      <Divider style={{ marginBottom: '1.5rem' }} />

      <Typography variant="body1" paragraph>
        Welcome to our website! We are a team of dedicated developers passionate about building modern,
        responsive, and user-friendly web applications using React.js and other modern technologies.
      </Typography>

      <Typography variant="body1" paragraph>
        Our mission is to create efficient, scalable, and visually appealing solutions that provide real
        value to users and businesses. We believe in clean code, continuous learning, and building with purpose.
      </Typography>

      <Typography variant="body1" paragraph>
        This project is built using React Router DOM for navigation and Material UI for consistent,
        accessible design. Whether you're a developer, business owner, or learner — we hope you find
        something useful here.
      </Typography>

      <Box mt={4}>
        <Typography variant="subtitle1" color="text.secondary">
          Thank you for visiting!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
