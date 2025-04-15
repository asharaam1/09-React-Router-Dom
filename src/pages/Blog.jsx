import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Blog
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our blog section where we share the latest updates, tutorials, and insights on web development,
        design trends, and more.
      </Typography>

      <Box display="grid" gap={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">Getting Started with React</Typography>
            <Typography variant="body2" color="text.secondary">
              A complete guide to kickstart your journey with React.js including setup, components, state, and props.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Styling in React: MUI vs Daisy UI</Typography>
            <Typography variant="body2" color="text.secondary">
              A detailed comparison of Material UI and Daisy UI for styling React applications.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Blog;
